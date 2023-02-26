export const BACKEND_URL = "http://localhost:8080";

export const GET_ALL_RECORDS = {
  url: "/api/records",
  method: "GET",
};

export function GET_RECORD_BY_ID(recordId) {
  return {
    url: `/api/records/${recordId}/likes`,
    method: "GET",
  };
}

export function UPDATE_RECORDS(recordId) {
  return {
    url: `/api/records/${recordId}/likes`,
    method: "PATCH",
  };
}
