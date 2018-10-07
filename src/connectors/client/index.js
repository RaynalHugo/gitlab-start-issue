import getIssuesUnbound from "./getIssues";
import getUserUnbound from "./getUser";
import getMilestonesUnbound from "./getMilestones";
import createBranchUnbound from "./createBranch";
import createMergeRequestUnbound from "./createMergeRequest";
import initUnbound from "./init";

class client {
  constructor() {
    this.setStore = this.setStore.bind(this);
    this.getUser = getUserUnbound.bind(this);
    this.getIssues = getIssuesUnbound.bind(this);
    this.getMilestones = getMilestonesUnbound.bind(this);
    this.createBranch = createBranchUnbound.bind(this);
    this.createMergeRequest = createMergeRequestUnbound.bind(this);
    this.init = initUnbound.bind(this);
  }

  setStore(store) {
    this.store = store;
  }
}

export default client;
