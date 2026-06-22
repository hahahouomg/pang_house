import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  TARGET,
  classifyCommute,
  computePinLayouts,
  formatMinutes,
  haversineKm,
  housingSites,
  projectPointToMap,
} from "./app.js";

test("housing data covers the requested Shenzhen talent-housing locations", () => {
  const names = housingSites.map((site) => site.name);

  [
    "深康村",
    "安居鸣鹿苑",
    "东明花园",
    "龙悦居三期",
    "龙悦居四期",
    "笔架山公馆",
    "冠铭花园",
    "龙瑞佳园",
    "蛇口人才公寓",
    "龙海家园",
    "金融街华发融御花园",
    "安居鸣鹿苑（南区）",
    "星河华邸",
    "星河华邸二期",
    "凤凰英荟城",
  ].forEach((name) => {
    assert.ok(names.includes(name), `${name} should be present`);
  });
});

test("haversine distance is returned in kilometers", () => {
  const oneDegreeLatitude = haversineKm(
    { lat: 22, lon: 114 },
    { lat: 23, lon: 114 },
  );

  assert.ok(oneDegreeLatitude > 110);
  assert.ok(oneDegreeLatitude < 112);
});

test("minute ranges are formatted compactly in Chinese", () => {
  assert.equal(formatMinutes([12, 18]), "12-18 分钟");
  assert.equal(formatMinutes([60, 85]), "1小时-1小时25分钟");
});

test("commute classification separates nearby and long-distance sites", () => {
  assert.equal(classifyCommute(4.2).label, "近");
  assert.equal(classifyCommute(14.1).label, "中");
  assert.equal(classifyCommute(24.5).label, "远");
});

test("each housing site has static route plans and housing profile content", () => {
  housingSites.forEach((site) => {
    assert.ok(site.routes?.length >= 2, `${site.name} should have route plans`);
    assert.ok(
      site.routes.some((route) => route.mode === "地铁/公交"),
      `${site.name} should include public transit`,
    );
    assert.ok(site.profile?.summary, `${site.name} should have a profile summary`);
    assert.ok(site.profile?.environment, `${site.name} should describe environment`);
    assert.ok(site.profile?.reviews?.length >= 2, `${site.name} should have review bullets`);
    assert.ok(site.profile?.photoLinks?.length >= 1, `${site.name} should have photo links`);
    assert.ok(site.profile?.confidence, `${site.name} should state data confidence`);
  });
});

test("page does not expose live Amap navigation links", () => {
  const html = readFileSync("index.html", "utf8");
  const js = readFileSync("app.js", "utf8");

  assert.doesNotMatch(html, /高德路线|uri\.amap|amap/i);
  assert.doesNotMatch(js, /uri\.amap|buildAmapNavUrl|高德路线/i);
});

test("page uses a Shenzhen-style thumbnail map instead of abstract blobs", () => {
  const html = readFileSync("index.html", "utf8");

  assert.match(html, /class="[^"]*\bgeo-map\b[^"]*"/);
  assert.match(html, /深圳行政区静态缩略图/);
  assert.doesNotMatch(html, /class="district west"/);
});

test("nearby map pins are visually fanned out so they stay clickable", () => {
  const layouts = computePinLayouts(housingSites, { avoidPoints: [TARGET] });
  const byId = Object.fromEntries(layouts.map((layout) => [layout.id, layout]));
  const visualDistance = (a, b) =>
    Math.hypot(a.visualX - b.visualX, a.visualY - b.visualY);
  const targetPoint = projectPointToMap(TARGET);

  assert.ok(visualDistance(byId.longyue3, byId.longyue4) >= 5.6);
  assert.ok(visualDistance(byId.dongming, byId.longyue4) >= 5.6);
  assert.ok(visualDistance(byId.yinghui, byId.xinghe2) >= 5.6);
  assert.notEqual(byId.longyue3.dx, byId.longyue4.dx);

  layouts.forEach((layout, index) => {
    layouts.slice(index + 1).forEach((other) => {
      assert.ok(
        visualDistance(layout, other) >= 5.4,
        `${layout.id} and ${other.id} should not overlap`,
      );
    });
    assert.ok(
      Math.hypot(layout.visualX - targetPoint.x, layout.visualY - targetPoint.y) >= 6.8,
      `${layout.id} should not cover the target marker`,
    );
  });
});
