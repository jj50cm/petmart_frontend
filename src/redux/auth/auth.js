import jwtDecode from "jwt-decode";

export function isTokenExpired(token) {
  const decodedToken = jwtDecode(token);
  return decodedToken.exp < Date.now() / 1000;
}
