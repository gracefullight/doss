if (!self.define) {
  let e,
    a = {};
  const s = (s, i) => (
    (s = new URL(s + ".js", i).href),
    a[s] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, f) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[c]) return;
    let t = {};
    const n = (e) => s(e, c),
      d = { module: { uri: c }, exports: t, require: n };
    a[c] = Promise.all(i.map((e) => d[e] || n(e))).then((e) => (f(...e), t));
  };
}
define(["./workbox-9564d7f6"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/033c8edc-f49bcdacd62d20ed.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/0af98a8b-5cbf93260d42afac.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/12165865-18bdece64d010806.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/1432-b345892d6f0cdc85.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/2948-c5ad8715b79a5cd7.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/2979-9a01078411af7eb8.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/3703-5b1609a4f27a2af0.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/3798-b2c99c8446c67c5a.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/4270-b51e31ac786eb53b.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/5367-d7ad86536ec35678.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/5920-12f7215c795f49ea.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/6358-18e6b34a11607b6e.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/666-5a566cf1c04bd1fb.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/6919-a9ba28641faa0c12.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/7625.1c6f32227972a3b0.js",
          revision: "1c6f32227972a3b0",
        },
        {
          url: "/_next/static/chunks/7864-db0d460110c1bc1f.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/7ee5bb85-a2b35469543cafeb.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/8153-1ce46fa6fd07b53a.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/842-9a315c53c6d3513c.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/8423-4f4d0f048706838a.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/8654-e834894fe68f4dd3.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/8703-f213a884ce3872be.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/9782-19f56d34a552422e.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/(routes)/all/page-eefc43ac136fbcd8.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/(routes)/benefit/page-9a111f52060ebd10.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/(routes)/layout-0ecbb168a7d6ae2c.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/(routes)/page-04ca40f427d68cf7.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/(routes)/pay/page-6e94a874718fcbc3.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/(routes)/stock/page-3fbe8c77c89f0caf.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-20e470ba712a6696.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/auth/signIn/page-7c4c4c557ddeb705.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/bank/page-7388451a4fbd4b7f.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/bank/setting/page-0593e367bc955664.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/bank/transfer/find-account/page-1a85ab648013037b.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/bank/transfer/page-116c6c70c31e70f0.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/coupang/page-e23754b249c6eb1c.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/lottery/page-24ca15c8b430c128.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/lottery/setting/agreement/page-573d5de3a31eedc0.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/lottery/setting/alarm/page-59140acc0fe9188a.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/lottery/setting/alarm/time/page-7594b16b3e5b647f.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/lottery/setting/page-d2d72abba53d7217.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/lottery/share/page-2edf210a4e8a2063.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/nearby/my-character/page-2737fdc1920da591.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/nearby/page-135eb3cf363868c8.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/point/agreement/page-b09f66ac9fc967e8.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/point/brand/page-ae6621f6e01ff4c9.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/benefit/point/page-fa748728413ca23e.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/docs/page-1faa4195298deb31.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/global-error-26f99a916adaf707.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/layout-622018abc938be7e.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/notification/page-5c9e011fa41a720b.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/pay/setting/page-1ab91d106fd354f2.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/popular-menus/page-c44c06a729a5e931.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/stock/investment/connect/page-275cf13776de758f.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/stock/investment/feedback/page-ecad879d133e7600.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/stock/investment/page-e628f13651bc2138.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/stock/major-indexes/page-c70469c069e27b99.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/app/stock/setting/page-32292062282a1d33.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/d0687573-e473b78d74b901cf.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/framework-21a22787679fd575.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/main-app-733e867e839723d8.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/main-ca8bfa023340867d.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/pages/_app-9889c18551cd19ad.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/pages/_error-7b7006101e7c0894.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-77b371cfebc9dabe.js",
          revision: "kzoC3sgfSCL0N3MmeknAl",
        },
        {
          url: "/_next/static/css/169b69923ce7844c.css",
          revision: "169b69923ce7844c",
        },
        {
          url: "/_next/static/css/1d6ed9ba09cc3826.css",
          revision: "1d6ed9ba09cc3826",
        },
        {
          url: "/_next/static/kzoC3sgfSCL0N3MmeknAl/_buildManifest.js",
          revision: "73d284e122ad7bd36da17335422c7dfe",
        },
        {
          url: "/_next/static/kzoC3sgfSCL0N3MmeknAl/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/media/01dff4c4ac63a0d3-s.woff2",
          revision: "4253823e253080c6e5e3387173dd2cb0",
        },
        {
          url: "/_next/static/media/04daeef78f46eb85-s.woff2",
          revision: "c11694aa9f35392af7513c295a163bc7",
        },
        {
          url: "/_next/static/media/0639b0dfb9b4f4ba-s.woff2",
          revision: "9600028749cb1538d1cf50468e5fc016",
        },
        {
          url: "/_next/static/media/06eda078e4b64efd-s.woff2",
          revision: "2c8a2f6881b8a1071fabae3c6dfeee6a",
        },
        {
          url: "/_next/static/media/07fbd97b4d67da99-s.woff2",
          revision: "e17e6ecd8dbf872bd11f6f950406ebd7",
        },
        {
          url: "/_next/static/media/0deff3f0700f03cc-s.woff2",
          revision: "7909d1a0ab9b6bb9b65faec71a76d34a",
        },
        {
          url: "/_next/static/media/0fef1a063a793ebf-s.woff2",
          revision: "e2a2a918b52628e6a9056b27e2d218bf",
        },
        {
          url: "/_next/static/media/10b25f7840b4bc42-s.woff2",
          revision: "aecd7233bcabe32826590ec94d061483",
        },
        {
          url: "/_next/static/media/1589adf678307552-s.woff2",
          revision: "ad78bee7c72f09cd006c729936e5c654",
        },
        {
          url: "/_next/static/media/171ed914f8915f61-s.woff2",
          revision: "fc921cd139b0f7438e31ac03e7220d11",
        },
        {
          url: "/_next/static/media/190cde0e85380b12-s.woff2",
          revision: "dbe7f40a7f9a49f07636c09dab98f0d8",
        },
        {
          url: "/_next/static/media/192dda636ff5febe-s.woff2",
          revision: "54af29f0d42f26daf30b97063fbf3412",
        },
        {
          url: "/_next/static/media/1af90c063d4c21f1-s.woff2",
          revision: "36882b48dc0f6f99b291cd17d1e915eb",
        },
        {
          url: "/_next/static/media/1fb58fba2ed52687-s.woff2",
          revision: "b673d9c4d442684c71a52ace6143d48c",
        },
        {
          url: "/_next/static/media/231f77fab9cf003b-s.woff2",
          revision: "89b7de729e0e5772c25f70ae7826346f",
        },
        {
          url: "/_next/static/media/23819467d97353aa-s.woff2",
          revision: "ed25efe8499ccd2d8ae4c73655877ea3",
        },
        {
          url: "/_next/static/media/264ad191907e74e4-s.woff2",
          revision: "cfce063afc3cbb2d969e6d399bc68a5e",
        },
        {
          url: "/_next/static/media/299c58d589315bf4-s.woff2",
          revision: "e7df1018686ed0e9832cfc332ad366fd",
        },
        {
          url: "/_next/static/media/2a28c294ba0ddb8d-s.woff2",
          revision: "9332add8d536b16fcfcda5e65701817f",
        },
        {
          url: "/_next/static/media/2dde13cba929cceb-s.woff2",
          revision: "0fb5befe47282dd8bde854d73cbd3df6",
        },
        {
          url: "/_next/static/media/2e911975412467c6-s.woff2",
          revision: "0b2e641770163bfee8b010605b05043a",
        },
        {
          url: "/_next/static/media/2f0c9b3865466e05-s.woff2",
          revision: "00bb8c0dbaedd4fa18b12a2e730e74d3",
        },
        {
          url: "/_next/static/media/3120dc655b257ccf-s.woff2",
          revision: "16799712ad877ca35f0baa06ea278ca8",
        },
        {
          url: "/_next/static/media/318ee22ada9a3682-s.woff2",
          revision: "da21a7a332571cf56059b4be74713783",
        },
        {
          url: "/_next/static/media/36350854f5f459a5-s.woff2",
          revision: "c90d62831a3b373a22937ec714335e82",
        },
        {
          url: "/_next/static/media/3751b46f0cc8ffc0-s.woff2",
          revision: "3c4cd13fa2dcd3352a4da43eed2af5f9",
        },
        {
          url: "/_next/static/media/397de44f21f0df04-s.woff2",
          revision: "d5522d122baa6aaf8aa44aefa3d42a56",
        },
        {
          url: "/_next/static/media/3cc480f26447d3f4-s.woff2",
          revision: "350c93a99276e50d1b6d568281d4141e",
        },
        {
          url: "/_next/static/media/3cf5232c9acac826-s.woff2",
          revision: "9671d8596cb3a3d8590bf1da3947b113",
        },
        {
          url: "/_next/static/media/3e83c8b9781da49f-s.woff2",
          revision: "7302aa16bfef882c238b41468f8c38a9",
        },
        {
          url: "/_next/static/media/3f20ce63bb57fcbe-s.woff2",
          revision: "4d7e106a509d07bf61cac7183412655d",
        },
        {
          url: "/_next/static/media/4267f749fe0ff01f-s.woff2",
          revision: "8dac5d0dc35e42a4b932a3c6c072caf6",
        },
        {
          url: "/_next/static/media/42a41d6f90ca27b1-s.woff2",
          revision: "a6f28de823b53b716d0147021723e825",
        },
        {
          url: "/_next/static/media/435448e75fa5ee63-s.woff2",
          revision: "5cf994f6fc1b0b8477ccd6643e5abf3e",
        },
        {
          url: "/_next/static/media/4867f17d87d5a353-s.woff2",
          revision: "c70f5549d8d824a94cb7e84613d66aef",
        },
        {
          url: "/_next/static/media/52aae37d66f9b18b-s.woff2",
          revision: "54f9253251bf051abfa3bea0e7f98b21",
        },
        {
          url: "/_next/static/media/533328ec97ab7470-s.woff2",
          revision: "9cf4221b978348813fff71c1def65918",
        },
        {
          url: "/_next/static/media/5362087f295c19ad-s.woff2",
          revision: "34cfa265c930be4e16b2f4fb61c30a51",
        },
        {
          url: "/_next/static/media/549188ce5b0213e0-s.woff2",
          revision: "752bd89956b13cb0f0891b15e98abbe3",
        },
        {
          url: "/_next/static/media/5a6c334e80fffaf8-s.woff2",
          revision: "7e12f8c84977dee8c79a78b4da54780d",
        },
        {
          url: "/_next/static/media/5f38b0ba98bac2ba-s.woff2",
          revision: "50c6abc679e44a0572a72c264fff96ac",
        },
        {
          url: "/_next/static/media/60bca3914338dd03-s.woff2",
          revision: "312d64447adf168e47fb28714858359b",
        },
        {
          url: "/_next/static/media/62a35b1059471fc5-s.woff2",
          revision: "7b5076724c7275b1c566854135b9f314",
        },
        {
          url: "/_next/static/media/6331f0071f2f74e3-s.woff2",
          revision: "290009c0bf919032d358095bb344c80c",
        },
        {
          url: "/_next/static/media/685416660c3bee4f-s.woff2",
          revision: "6a291b934fdd83aa924fda208ab20b1d",
        },
        {
          url: "/_next/static/media/694d2933e1c713ce-s.woff2",
          revision: "ba7c07ab6cd20e0c99a9fce952aec68a",
        },
        {
          url: "/_next/static/media/6ad7d62b0f7d63e4-s.woff2",
          revision: "fe10334546bcb1793471281348fc3c76",
        },
        {
          url: "/_next/static/media/6dae081418abfe5c-s.woff2",
          revision: "0d8799e158eaeeb1fe2d3d6a11a76fb1",
        },
        {
          url: "/_next/static/media/70764ebfc7208e24-s.woff2",
          revision: "49c06fba3cd0639fdb816f916a44590c",
        },
        {
          url: "/_next/static/media/71494b83ddc040bf-s.woff2",
          revision: "102a9214de488d7d1b164c1c373f3173",
        },
        {
          url: "/_next/static/media/7280640b557fde6e-s.woff2",
          revision: "baf670e3fe6560817d76e09b4203a60b",
        },
        {
          url: "/_next/static/media/76742baf8508dabc-s.woff2",
          revision: "0c240b19c2152d486785dc88432fcd42",
        },
        {
          url: "/_next/static/media/77ea56196ff8ff63-s.woff2",
          revision: "aecd7e10da92c045e68c42f3b6f8a4bd",
        },
        {
          url: "/_next/static/media/784ccdfee4132171-s.woff2",
          revision: "1b13d1b9e634c285de131aa4ca5bc319",
        },
        {
          url: "/_next/static/media/7915bf8d07af2be8-s.woff2",
          revision: "04e75799354be28a40f8310f93c3e2d6",
        },
        {
          url: "/_next/static/media/7a3e742a14a198c6-s.woff2",
          revision: "73e3e1b6e1d6b2467ef47e720a6952a7",
        },
        {
          url: "/_next/static/media/7dc855ce711afbdf-s.woff2",
          revision: "c83100e375d6da735fa6a67841ac3de9",
        },
        {
          url: "/_next/static/media/810a12ab927d6ddf-s.woff2",
          revision: "f8812bdc4d37ea390552e4f1539d315f",
        },
        {
          url: "/_next/static/media/8307bb9269b9d5f5-s.woff2",
          revision: "b4b193a20aaeaa5c49a52057e2117991",
        },
        {
          url: "/_next/static/media/8356bc88c9aceb8c-s.woff2",
          revision: "f42d36a42e8482a90aca3b127b8ad5ad",
        },
        {
          url: "/_next/static/media/83febaafa344ce92-s.woff2",
          revision: "4c20b50eb0997b4d9151b2f0ed47a56b",
        },
        {
          url: "/_next/static/media/859a0dca9e0c6ce2-s.woff2",
          revision: "85bd2fdb4818301ee7e95dee4a7b3810",
        },
        {
          url: "/_next/static/media/870cdc01bb73440a-s.woff2",
          revision: "8c4bedb8e336f2baf4dad2cfb7088a58",
        },
        {
          url: "/_next/static/media/87e36b9f82dba8bb-s.woff2",
          revision: "054ff022400ab739db96c3c27843a909",
        },
        {
          url: "/_next/static/media/893138dcb91f6663-s.woff2",
          revision: "6320026e4456a21c07f8a17705106076",
        },
        {
          url: "/_next/static/media/89ab80d3cd33729f-s.woff2",
          revision: "6c79f9e5a7e1adc456af4d69078688b9",
        },
        {
          url: "/_next/static/media/8d0031a6efb26892-s.woff2",
          revision: "6ecbf2f959ea5b9322b2cc3d00a6ed93",
        },
        {
          url: "/_next/static/media/915abe235506c32b-s.woff2",
          revision: "ef93453be99f9f0d7f68266cb5e8c880",
        },
        {
          url: "/_next/static/media/92fd8d7711d4e44f-s.woff2",
          revision: "2fef9d9a4f1bcf1ea6d1b9441626af99",
        },
        {
          url: "/_next/static/media/938473a671f41906-s.woff2",
          revision: "3fed72d8f2c12e6393cd86cc9d0842f7",
        },
        {
          url: "/_next/static/media/96ff03a0d37ca0cc-s.woff2",
          revision: "7c809f6a3ff8645bcaeb20e11ea42247",
        },
        {
          url: "/_next/static/media/9a1f7ba304aeeecf-s.woff2",
          revision: "7aec3edf1326878b1674bcb93dd4a483",
        },
        {
          url: "/_next/static/media/9afba82686c22962-s.woff2",
          revision: "057eaf74fdb721cc4b9f9d53147c628c",
        },
        {
          url: "/_next/static/media/9c10920ae9aa448b-s.woff2",
          revision: "cb96560d8287031c7bd1e78fec38e55c",
        },
        {
          url: "/_next/static/media/9dfbb05d946afcd6-s.woff2",
          revision: "289314d0b294f4fdf8f9c6a87a0152d5",
        },
        {
          url: "/_next/static/media/9fbec714bdb25d9c-s.woff2",
          revision: "3f0d1658a97c6d8a5b028866f4cab627",
        },
        {
          url: "/_next/static/media/a0ade0cbbb99f32c-s.woff2",
          revision: "933552228444e96f4badbaedba693195",
        },
        {
          url: "/_next/static/media/a15f2fce4b98b461-s.p.woff2",
          revision: "3f0d038cee19fede70f342b6fdf2ef9a",
        },
        {
          url: "/_next/static/media/a621347f664b2a4d-s.woff2",
          revision: "75a20e9e0de33b664d1f72157f4e4660",
        },
        {
          url: "/_next/static/media/a78bba587d6a308c-s.woff2",
          revision: "853daac0ebb2ef205ae0dd8b48e566c5",
        },
        {
          url: "/_next/static/media/aa40919727fba93d-s.woff2",
          revision: "144cc1fe7045a7e3a1c644c9319bd292",
        },
        {
          url: "/_next/static/media/aa70556e250acb94-s.woff2",
          revision: "3465ee57a0f68cc9931b99a5afc9445d",
        },
        {
          url: "/_next/static/media/aa7db2ad41bd25ba-s.woff2",
          revision: "0f044695cec44ab72605c2751344c05d",
        },
        {
          url: "/_next/static/media/accb5b304442de50-s.woff2",
          revision: "912db6004cd71579283aff90418232a7",
        },
        {
          url: "/_next/static/media/ae696edaac47af9c-s.woff2",
          revision: "3ab29966cd55d0fa15f94560fd4b6831",
        },
        {
          url: "/_next/static/media/b02bac4e4cf559dc-s.woff2",
          revision: "15cec44fb754939fc5c0dfb013cfc9ee",
        },
        {
          url: "/_next/static/media/b0b84cae34b4bea2-s.woff2",
          revision: "75276d9247c4e43ee0581303388688af",
        },
        {
          url: "/_next/static/media/b2f0ba1cb1abb8d4-s.woff2",
          revision: "cc57580f80c430ec1aa7b10c3f0ff292",
        },
        {
          url: "/_next/static/media/b3781132b3be7073-s.woff2",
          revision: "0fdf9f981eccb8b587435ce8716c6fa1",
        },
        {
          url: "/_next/static/media/b485136457214f4b-s.woff2",
          revision: "58f4a58e1cb5b5ce86cfd87b7e0dff2f",
        },
        {
          url: "/_next/static/media/b737e516a2777308-s.woff2",
          revision: "d00bab6eb12013a51febfaad3d58861d",
        },
        {
          url: "/_next/static/media/b84676a33e32a8e0-s.woff2",
          revision: "55f0826e2b89ecf2bf59cb7b5c437dfd",
        },
        {
          url: "/_next/static/media/b90f702fec14e0c6-s.woff2",
          revision: "77b0cf4739ee982e200276098e2f2da2",
        },
        {
          url: "/_next/static/media/b9f11b1a528ed956-s.woff2",
          revision: "064ea53272683f26ee6ac0d88b0b0593",
        },
        {
          url: "/_next/static/media/ba003e23a28450e7-s.woff2",
          revision: "a949cce22621d0167d579a66c57e39e5",
        },
        {
          url: "/_next/static/media/bc726254f52404d2-s.woff2",
          revision: "2c6fe6b33528a651273af446fd22fd64",
        },
        {
          url: "/_next/static/media/c5e14d45967bbb5e-s.woff2",
          revision: "59d649b59d66e9f62ffff666e66f87c1",
        },
        {
          url: "/_next/static/media/c6a0b5670846dd2a-s.woff2",
          revision: "5f201603c49f13023dd6db3dd49ebf68",
        },
        {
          url: "/_next/static/media/c7b0e98f802564b1-s.woff2",
          revision: "4bb2f1169dc3a1f8668f735b739556d6",
        },
        {
          url: "/_next/static/media/c89ab73a8890fbed-s.woff2",
          revision: "18df29aab1148c6950afda9b0637c372",
        },
        {
          url: "/_next/static/media/c970d8e7b7fb9a06-s.woff2",
          revision: "fb73e76d8a557beb66a6d505da3db22c",
        },
        {
          url: "/_next/static/media/cc5d58d5ea94fcc4-s.woff2",
          revision: "a193ca92ce492d08089777c3479a361e",
        },
        {
          url: "/_next/static/media/cd769f5a1ca2d9c5-s.woff2",
          revision: "3506cae512ac8790a3df9dd8532c9017",
        },
        {
          url: "/_next/static/media/cf70e2a08f1f5f62-s.woff2",
          revision: "cfaad1817c13b671d589202d93a99794",
        },
        {
          url: "/_next/static/media/d0a0342ed691a7f5-s.woff2",
          revision: "17b4d3d80943f8e66bdd57997feee93e",
        },
        {
          url: "/_next/static/media/d2621c18918d28b8-s.woff2",
          revision: "bf4f0bda7c5a122906d6fd8f649b847f",
        },
        {
          url: "/_next/static/media/d3310f2e2e8765f6-s.woff2",
          revision: "1ba88f2b984d7b68501db0fcb3955bce",
        },
        {
          url: "/_next/static/media/da99ae30fc536f3e-s.woff2",
          revision: "0f3a7d69d9691b1f21395e4328ecd214",
        },
        {
          url: "/_next/static/media/dc5da0fdb1198adf-s.woff2",
          revision: "06b434d326269209bfb7ef8ca86f7847",
        },
        {
          url: "/_next/static/media/ddb9467c20b2b7b6-s.woff2",
          revision: "14b27e0b64250a87d7485b533f5f2237",
        },
        {
          url: "/_next/static/media/de1e43093eb6402c-s.woff2",
          revision: "15e96601a4a7e5e418e906b6e669496a",
        },
        {
          url: "/_next/static/media/e0bde08f1e7fbc72-s.woff2",
          revision: "ae55304bf8c95c4a2db81defdaf650c7",
        },
        {
          url: "/_next/static/media/e44859446483d1d3-s.woff2",
          revision: "e8baf93f42898b588584b0fccc63a8dd",
        },
        {
          url: "/_next/static/media/e8ac59c94b6ffc73-s.woff2",
          revision: "ffc900bf02d8b856bd545eddb8d33418",
        },
        {
          url: "/_next/static/media/e8e0bbb6d4247975-s.woff2",
          revision: "bbdee6382dea249ab8f9a861561a1b54",
        },
        {
          url: "/_next/static/media/eba57749f42875c2-s.woff2",
          revision: "c48222af62c238b5a7d42141c74ab366",
        },
        {
          url: "/_next/static/media/ee5a0461435f8e6c-s.woff2",
          revision: "ae9605f310b3ff6be24d3d50fba3d7aa",
        },
        {
          url: "/_next/static/media/efd3c9f7dc8b4500-s.woff2",
          revision: "23561bd2c1f58775df95f3de52123296",
        },
        {
          url: "/_next/static/media/f0e13183b93fe06c-s.woff2",
          revision: "1f9db9645be0de8a5de0eceda8aeb414",
        },
        {
          url: "/_next/static/media/f14d9587d346a399-s.woff2",
          revision: "1504045a563478666e0196e921ba03f3",
        },
        {
          url: "/_next/static/media/f238ce09368a915e-s.woff2",
          revision: "601037b19f77b31208cf7b6155582ab7",
        },
        {
          url: "/_next/static/media/f82c48d71abb058e-s.woff2",
          revision: "f44458c1b67d9d6cfb680b4f2a84b177",
        },
        {
          url: "/_next/static/media/fa2619592b6250cb-s.woff2",
          revision: "0b3c080ca3ccfdc1f7b5e7fd8abe65c5",
        },
        {
          url: "/_next/static/media/fbf4122f4eb4fa62-s.woff2",
          revision: "b7b63732caf95e3db07ef6229ca79f5c",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "bb05eb0b5dfe45e8a28d420d4420ecf6",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "029f22392245c09c96ef2690a519a28e",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "4ca7464a2936c428e15f731eb82f0383",
        },
        { url: "/demo1.png", revision: "bebdac60d5befa192e84f5ea1f7a4568" },
        { url: "/demo2.png", revision: "64af623c2563b6d9a154eba875c21656" },
        { url: "/demo3.png", revision: "9466651e46ff20ee8aad163fbfc18947" },
        { url: "/demo4.png", revision: "1ea1b324a00fef32025c7d97b307af43" },
        {
          url: "/favicon-16x16.png",
          revision: "d59a869ed429cc0382f105a6ec8e7932",
        },
        {
          url: "/favicon-32x32.png",
          revision: "d258be3dea4f081b8017936c42ae3b35",
        },
        { url: "/favicon.ico", revision: "5e57bce5ec97c88caa8b5a29c0529b6d" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: a } }) =>
        !(!e || a.startsWith("/api/auth/callback") || !a.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        s &&
        !a.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        "1" === e.headers.get("RSC") && s && !a.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: a }) => a && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
//# sourceMappingURL=sw.js.map
