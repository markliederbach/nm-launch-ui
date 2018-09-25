import { observable, computed, action } from "mobx";

export default class LaunchStore {
  @observable
  results = {};
  @observable
  @action
  getLaunches = async (params = {}) => {
    let { next } = params;
    let url = "http://localhost:8000/api/v1/launch";
    return await fetch(`${url}?next=${next ? next : 15}`)
      .then(resp => resp.json())
      .then(data => (this.results = data));
  };
}
