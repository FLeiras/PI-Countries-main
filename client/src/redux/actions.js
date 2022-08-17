import axios from "axios";

export const getCountries = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
};

export const getActivity = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/activity");
    return dispatch({
      type: "GET_ACTIVITY",
      payload: response.data,
    });
  };
};

export const getCountryById = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);
    return dispatch({
      type: "GET_COUNTRY_BY_ID",
      payload: response.data,
    });
  };
};

export function sortByName(payload) {
  return {
    type: "SORT_COUNTRIES_BY_NAME",
    payload,
  };
}

export function sortByPopulation(payload) {
  return {
    type: "SORT_COUNTRIES_BY_POPULATION",
    payload,
  };
}

export function filterByContinent(order) {
  return {
    type: "FILTER_BY_CONTINENT",
    payload: order,
  };
}

export function searchCountries(name) {
  return {
    type: "SEARCH_COUNTRIES",
    payload: name,
  };
}

export function filterByActivity(payload) {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload,
  };
}

export function postActivity(payload) {
  return async function () {
    const json = await axios.post("http://localhost:3001/activity", payload);
    return json;
  };
}

export function deleteActivity(id, countryId) {
  return async function (dispatch) {
    console.log(countryId);
    await axios.put(`http://localhost:3001/activity/delete/${id}`, {
      countryId: countryId,
    });
    return dispatch({
      type: "DELETE_ACTIVITY",
    });
  };
}

export const updateActivity = (id, data) => {
  return async function (dispatch) {
    try {
      await axios.put(`http://localhost:3001/activity/${data}`, id);
      return dispatch({
        type: "UPDATE_ACTIVITY",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const SORT_COUNTRIES_BY_NAME = "SORT_COUNTRIES_BY_NAME";
export const SORT_COUNTRIES_BY_POPULATION = "SORT_COUNTRIES_BY_POPULATION";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
