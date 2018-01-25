import { Mobxgram } from "./mobxgramStore.js";
import { toJS } from "mobx";

import store from "./sampleStore";

describe("Testing Mobxgram State", () => {
  let mobxgramInstance = new Mobxgram();

  it("Default State Testing", () => {
    //input => output
    expect(toJS(mobxgramInstance.mobxgramList)).toEqual([]);
  });

  it("Getting Default data from sample Store", () => {
    mobxgramInstance.getStore();
    expect(toJS(mobxgramInstance.mobxgramList)).toEqual(store);
  });
});
