const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

/* Write tests here

it('does something', async () => {
  await run('a{ }', 'a{ }', { })
})

*/

it("does something", async () => {
  await run(
    `.news-list .news-item,
    .news-list-pc .news-item {
      position: relative;
      display: block;
      margin: 0 auto;
      text-align: left;
      width: 333px;
      margin-bottom: 36px;
      overflow: hidden;
      line-height: 33px;
      border-radius: 10px;
      font-size: 24px;
    }
    .news-list .news-item:hover,
    .news-list-pc .news-item:hover {
      z-index: 8;
    }
    .news-list .news-item img.play-btn,
    .news-list-pc .news-item img.play-btn {
      top: 26px;
      right: 17px;
      height: 27px;
    }
    .news-list .news-item p,
    .news-list-pc .news-item p {
      padding: 0 20px;
      color: #3a3d50;
      text-overflow: ellipsis;
      word-break: break-all;
      margin: 13px 0 22px;
    }
    @media (min-width: 1024px) {
      .news-list .news-item {
        width: 235px;
        margin-bottom: 15px;
        line-height: 25px;
      }
      .news-list .news-item p {
        padding: 0 8px;
        margin: 8px 0 15px;
      }
      .news-list .news-item img.play-btn {
        top: 10px;
        right: 13px;
        height: 23px;
      }
    }`,
    `.news-list .news-item,
    .news-list-pc .news-item {
      position: relative;
      display: block;
      margin: 0 auto;
      text-align: left;
      width: 8.88rem;
      margin-bottom: 0.96rem;
      overflow: hidden;
      line-height: 0.88rem;
      border-radius: 0.26667rem;
      font-size: 0.64rem;
    }
    .news-list .news-item:hover,
    .news-list-pc .news-item:hover {
      z-index: 8;
    }
    .news-list .news-item img.play-btn,
    .news-list-pc .news-item img.play-btn {
      top: 0.69333rem;
      right: 0.45333rem;
      height: 0.72rem;
    }
    .news-list .news-item p,
    .news-list-pc .news-item p {
      padding: 0 0.53333rem;
      color: #3a3d50;
      text-overflow: ellipsis;
      word-break: break-all;
      margin: 0.34667rem 0 0.58667rem;
    }
    @media (min-width: 1024px) {
      .news-list .news-item {
        width: 235px;
        margin-bottom: 15px;
        line-height: 25px;
      }
      .news-list .news-item p {
        padding: 0 8px;
        margin: 8px 0 15px;
      }
      .news-list .news-item img.play-btn {
        top: 10px;
        right: 13px;
        height: 23px;
      }
    }`,
    {
      rootValue: 37.5,
      propList: ["*"],
    }
  );
});
