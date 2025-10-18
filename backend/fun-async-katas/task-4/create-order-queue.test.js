const { createOrderQueue } = require("./create-order-queue");

describe.skip("createOrderQueue", () => {
  const sleep = function (ms, value) {
    return () => new Promise((resolve) => setTimeout(() => resolve(value), ms));
  };

  test("resolves with results in the same order as input tasks", () => {
    const tasks = [
      sleep(500, "a"),
      sleep(300, "b"),
      sleep(400, "c"),
      sleep(100, "d"),
      sleep(200, "e"),
    ];

    return createOrderQueue(tasks).then((results) => {
      expect(results).toEqual(["a", "b", "c", "d", "e"]);
    });
  });

  test("resolves all tasks successfully when passed concurrency limit", () => {
    const tasks = [sleep(100, 1), sleep(100, 2), sleep(100, 3), sleep(100, 4)];

    return createOrderQueue(tasks, 2).then((results) => {
      expect(results).toEqual([1, 2, 3, 4]);
    });
  });

  test("number of concurrent tasks does not exceed max concurrency limit", () => {
    const activeTasks = [];
    const maxConcurrent = 3;
    let peakConcurrency = 0;

    const createTask = (ms, value) => () => {
      activeTasks.push(value);
      if (activeTasks.length > peakConcurrency) {
        peakConcurrency = activeTasks.length;
      }
      return new Promise((resolve) =>
        setTimeout(() => {
          activeTasks.splice(activeTasks.indexOf(value), 1);
          resolve(value);
        }, ms)
      );
    };

    const tasks = [
      createTask(100, "a"),
      createTask(100, "b"),
      createTask(100, "c"),
      createTask(100, "d"),
      createTask(100, "e"),
    ];

    return createOrderQueue(tasks, maxConcurrent).then((results) => {
      expect(results).toEqual(["a", "b", "c", "d", "e"]);
      expect(peakConcurrency).toBeLessThanOrEqual(maxConcurrent);
    });
  });
});
