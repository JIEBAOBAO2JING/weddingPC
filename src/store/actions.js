import api from '../api/index'
import * as types from './types'


//----------------------------------------------------------------------------------------------
export const showMsg = ({ commit }, data) => {
    const id = new Date().getTime();
    data.id = id;
    commit(types.SHOW_MSG, data);
    setTimeout(() => commit(types.HIDE_MSG, id), 5000)
};

export const hideMsg = ({ commit }, id) => {
    commit(types.HIDE_MSG, id)
};

export const showModal = ({ commit }, data) => {
    commit(types.SHOW_MODAL, data);
};

export const hideModal = ({ commit }, data) => {
    commit(types.HIDE_MODAL, data);
};
//----------------------------------------------------------------------------------------------

//-------------------------------查询商家首页列表---------------------------------------------------------------
export const qryBusList = ({ commit },data) => {
    api.qryBusList(data).then(function (response) {
        commit(types.BUS_LIST, {
            list: response.data.data.list,
            page: response.data.data.page
        })
    })
        .catch(function (error) {
            commit(types.BUS_LIST);
            console.log(error)
        });
};

export const busClear = ({ commit }) => {
    commit(types.BUS_CLEAR)
};
//----------------------------------------------------------------------------------------------

//---------------------------------商家首页分类-------------------------------------------------------------
export const qrybusTag = ({ commit },data) => {
    api.qryBusTag(data).then(function (response) {
        commit(types.BUS_TAG_LIST, {
            list: response.data.data
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};

export const busTagClear = ({ commit }) => {
    commit(types.BUS_TAG_CLEAR)
};

export const busTagChange = ({ commit },data) => {
    commit(types.BUS_TAG_CHANGE,data)
};
//----------------------------------------------------------------------------------------------

//----------------------------------商家详情------------------------------------------------------------
export const qryBusDetails = ({ commit },data) => {
    api.qryBusDetails(data).then(function (response) {
        commit(types.BUS_INFO, {
            data: response.data.data.bus_info
        })
        commit(types.BUS_DETAILS_LIST, {
            list: response.data.data.list
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};
//----------------------------------------------------------------------------------------------

//-------------------------------查询商家的官方案例---------------------------------------------------------------
export const qryBusSample = ({ commit },data) => {
    api.qryBusSample(data).then(function (response) {
        commit(types.BUS_SAMPLE, {
            list: response.data.data.list,
            store: response.data.data.store,
            page: response.data.data.page
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};

export const busSampleClear = ({ commit }) => {
    commit(types.BUS_CLEAR)
};
//----------------------------------------------------------------------------------------------

//---------------------------------商家官方案例分类-------------------------------------------------------------
export const qryBusSampleTag = ({ commit },data) => {
    api.qryBusSampleTag(data).then(function (response) {
        commit(types.BUS_SAMPLE_TAG, {
            list: response.data.data
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};

export const busSampleTagClear = ({ commit }) => {
    commit(types.BUS_SAMPLE_TAG_CLEAR)
};

export const busSampleTagChange = ({ commit },data) => {
    commit(types.BUS_SAMPLE_TAG_CHANGE,data)
};
//----------------------------------------------------------------------------------------------



//------------------------------------查询套餐首页列表----------------------------------------------------------
export const qryMealList = ({ commit },data) => {
    api.qryMealList(data).then(function (response) {
        commit(types.MEAL_LIST, {
            list: response.data.data.list,
            page: response.data.data.page
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};
export const mealClear = ({ commit }) => {
    commit(types.MEAL_CLEAR)
};
//----------------------------------------------------------------------------------------------

//---------------------------------------套餐首页分类-------------------------------------------------------
export const qryMealTag = ({ commit },data) => {
    api.qryMealTag(data).then(function (response) {
        commit(types.MEAL_TAG_LIST, {
            list: response.data.data
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};

export const mealTagClear = ({ commit }) => {
    commit(types.MEAL_TAG_CLEAR)
};

export const mealTagChange = ({ commit },data) => {
    commit(types.MEAL_TAG_CHANGE,data)
};
//----------------------------------------------------------------------------------------------

//-----------------------------------------套餐详情-----------------------------------------------------
export const qryMealDetails = ({ commit },data) => {
    api.qryMealDetails(data).then(function (response) {
        commit(types.MEAL_INFO, {
            info: response.data.data.package_info
        })
        commit(types.MEAL_DETAILS, {
            detail: response.data.data.package_detail
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};
//----------------------------------------------------------------------------------------------

//--------------------------------------查询商家的套餐列表--------------------------------------------------------
export const qryThisMealList = ({ commit },data) => {
    api.qryThisMealList(data).then(function (response) {
        commit(types.THIS_MEAL_LIST, {
            list: response.data.data.list,
            store: response.data.data.store,
        })
        commit(types.THIS_MEAL_PAGE, {
            currentPage: response.data.data.currentPage
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};
//----------------------------------------------------------------------------------------------

//---------------------------------商家的套餐列表分类-------------------------------------------------------------
export const qryThisMealTag = ({ commit },data) => {
    api.qryThisMealTag(data).then(function (response) {
        commit(types.THIS_MEAL_TAG, {
            list: response.data.data
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};

export const busThisMealTagClear = ({ commit }) => {
    commit(types.THIS_MEAL_TAG_CLEAR)
};

export const busThisMealTagChange = ({ commit },data) => {
    commit(types.THIS_MEAL_TAG_CHANGE,data)
};
//----------------------------------------------------------------------------------------------

//--------------------------------------摄影师详情--------------------------------------------------------
export const qryCamaramanDetails = ({ commit },data) => {
    api.qryCamaramanDetails(data).then(function (response) {
        commit(types.CAMARAMAN_DETAILS, {
            data: response.data.data
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};
//----------------------------------------------------------------------------------------------

//----------------------------------------化妆师详情------------------------------------------------------
export const qryMakeupDetails = ({ commit },data) => {
    api.qryMakeupDetails(data).then(function (response) {
        commit(types.MAKEUP_DETAILS, {
            data: response.data.data
        })
    })
        .catch(function (error) {
            console.log(error)
        });
};
//----------------------------------------------------------------------------------------------