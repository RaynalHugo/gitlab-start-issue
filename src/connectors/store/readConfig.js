//

import config from "../../../data/config.json";

import Promise from "bluebird";

import { map, isNil } from "lodash/fp";
const mapUncapped = map.convert({ cap: false });

async function readConfig(store) {
  await Promise.all(
    mapUncapped((value, key) => {
      if (!isNil(value)) {
        store.setItem(key, value);
      }
    }, config)
  );
}

export default readConfig;
