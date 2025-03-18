import { call, delay, takeEvery, takeLatest } from "redux-saga/effects";
import { getUserRepositories } from "./homepageAPI";
import { fetchRepositoriesFailure, fetchRepositoriesRequest, fetchRepositoriesSuccess } from "./homepageSlice";
import { put } from "redux-saga/effects";


function* getGitHubRepository() {
    try {
        yield delay(2000);
        const repositories = yield call(getUserRepositories);
        yield put(fetchRepositoriesSuccess(repositories));
    }
    catch (error) {
        yield put(fetchRepositoriesFailure());
        throw error;
    }
    // yield put(setLoadingFalse()); moze tak po zakonczeniu - resetowanie loading
}


export function* homepageSaga() {
    yield takeEvery(fetchRepositoriesRequest.type, getGitHubRepository);
}