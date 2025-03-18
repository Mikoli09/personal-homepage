import { call, delay, takeEvery, takeLatest } from "redux-saga/effects";
import { getUserRepositories } from "./homepageAPI";
import { fetchRepositoriesRequest, fetchRepositoriesSuccess } from "./homepageSlice";
import { put } from "redux-saga/effects";


function* getGitHubRepository() {
    try {
        yield delay(2000);
        const repositories = yield call(getUserRepositories);
        yield put(fetchRepositoriesSuccess(repositories));
        yield console.log(repositories[0].id);
        yield console.log(repositories[0].name);
        yield console.log(repositories[0].description);
        yield console.log(repositories[0].homepage);
        yield console.log(repositories[0].html_url);

    }
    catch (error) {
        throw error;
    }
    // yield put(setLoadingFalse()); moze tak po zakonczeniu - resetowanie loading
}


export function* homepageSaga() {
    yield takeEvery(fetchRepositoriesRequest.type, getGitHubRepository);
}