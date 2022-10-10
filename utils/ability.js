import { defineAbility } from "@casl/ability";

const ability = (user) => {
  const { current_role: role, id: userId, organization } = user;
  const bkd = organization?.startsWith("123");

  const admin = role === "admin" && bkd;
  const agent = role === "agent" && bkd;
  const userRole = role === "user";

  return defineAbility((can, cannot) => {
    // there is 3 roles: admin, agent, user
    if (admin) {
      can("manage", "all");
      can("read", "DashboardAdmin");
    } else if (agent) {
      can("manage", "Tickets");
      can("manage", "Feeds");
      can("read", "DashboardAgent");
    } else if (userRole) {
      can("manage", "Tickets");
      can("manage", "Feeds");
    }
  });
};

export default ability;
