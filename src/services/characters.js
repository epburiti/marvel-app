import api from "./api";
const apiRef = api("eb18744d1051cd78e704267fb942c634", "dc48872f5cb0cc3749f225a43830609873134af6")
export function getCharacters() {
  return api.get();
}

export default {
  getCharacters
}