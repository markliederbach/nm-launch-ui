import { observable, computed, action } from "mobx";
import DOMAINS from "../constants/Domains";

export default class LaunchStore {
  @observable
  results = {};
  @observable
  @action
  getLaunches = async (params = {}) => {
    let { next, name } = params;
    let url = `${DOMAINS.backend_api}/launch`;

    return await fetch(
      `${url}?next=${next ? next : 15}&name=${name ? name : ""}`
    )
      .then(resp => resp.json())
      .then(data => (this.results = data));
  };
}
