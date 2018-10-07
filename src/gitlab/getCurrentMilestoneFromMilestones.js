//
import { filter, sortBy, get, nth } from "lodash/fp";

function getCurrentMilestoneFromMilestones(milestones) {
  const activeMilestones = filter(
    milestone => get("state", milestone) === "active",
    milestones
  );
  return nth(1, sortBy(["title"], activeMilestones));
}

export default getCurrentMilestoneFromMilestones;
