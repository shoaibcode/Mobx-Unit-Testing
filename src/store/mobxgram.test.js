import { Mobxgram } from "./mobxgramStore.js";
import { toJS } from "mobx";

import store from "./sampleStore";

describe("Testing Mobxgram State", () => {
  let mobxgramInstance = null;

  beforeEach(function() {
    mobxgramInstance = new Mobxgram();
  });

  it("Default State Testing", () => {
    //input => output
    expect(toJS(mobxgramInstance.mobxgramList)).toEqual([]);
  });

  it("Getting Default data from sample Store", () => {
    mobxgramInstance.getStore();
    expect(toJS(mobxgramInstance.mobxgramList)).toEqual(store);
  });

  it("Increment Likes for Each Photo", () => {
    mobxgramInstance.mobxgramList.push(store[0]);

    mobxgramInstance.incrementLikes(0);

    expect(mobxgramInstance.mobxgramList[0].likes).toBe(++store[0].likes);
  });

  it("Adding Comments to Photo", () => {
    mobxgramInstance.mobxgramList.push(store[0]);
    mobxgramInstance.addComments({
      index: 0,
      author: "Shoaib",
      text: "Testing Comments"
    });

    expect(mobxgramInstance.mobxgramList[0].comments.length).toBe(
      ++store[0].comments.length
    );
  });
});
