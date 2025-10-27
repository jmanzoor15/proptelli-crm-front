const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "api/auth/login/",
    REFRESH: "/auth/token/refresh/",
  },
  USERS: {
    LIST: "/users/",
  },
  ROLES: {
    LIST: "api/roles/",
    CREATE: "api/roles/create",
    DETAIL:(id)=> `api/roles/${id}`,
    UPDATE:(id)=>`api/roles/${id}`,
    DELETE:(id)=>`api/roles/${id}`
  },
  MODULE: {
    LIST: "api/modules/actions/",
    DETAIL:(id)=> `api/modules/${id}`,
    UPDATE:(id)=> `api/module/edit/${id}`
  },
  ACTIONS: {
    LIST: "api/actions/"
  },
  LOGS: {
    LIST: "api/audit-logs",
    DETAIL:(id)=>`api/audit-logs/${id}`
  }

};

export default API_ENDPOINTS;
