import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 
        ADD_AGRO_RECORD,
        SET_ALL_AGRO_RECORDS, 
        GET_ALL_AGRO_RECORDS, 
        
        GET_FILTERED_START_TIME,
        GET_FILTERED_END_TIME,
        
        SET_LOADING,
        
        SET_SELECTED_AGRO_RECORD,

        GET_ALL_LANDSCAPING_RECORDS,
        GET_ALL_AGRIC_FIELD_TERMITE_CONTROL_RECORDS,
        GET_ALL_GRAIN_PROTECTION_RECORDS,
        GET_ALL_HOUSEHOLD_TERMITES_CONTROL_RECORDS,
        GET_ALL_PEST_CONTROL_FIELD_RECORDS,
        GET_ALL_PEST_CONTROL_ORCHARDS_RECORDS,
        GET_ALL_PEST_CONTROL_VEG_RECORDS,
        GET_ALL_PUBLIC_HEALTH_PEST_CONTROL_RECORDS,
        GET_ALL_SOIL_ANALYSIS_RECORDS,
        GET_ALL_VEG_ENTERPRISE_BUDGET_RECORDS,
        GET_ALL_WEED_CONTROL_RECORDS,


        SET_ALL_LANDSCAPING_RECORDS,
        SET_ALL_AGRIC_FIELD_TERMITE_CONTROL_RECORDS,
        SET_ALL_GRAIN_PROTECTION_RECORDS,
        SET_ALL_HOUSEHOLD_TERMITES_CONTROL_RECORDS,
        SET_ALL_PEST_CONTROL_FIELD_RECORDS,
        SET_ALL_PEST_CONTROL_ORCHARDS_RECORDS,
        SET_ALL_PEST_CONTROL_VEG_RECORDS,
        SET_ALL_PUBLIC_HEALTH_PEST_CONTROL_RECORDS,
        SET_ALL_SOIL_ANALYSIS_RECORDS,
        SET_ALL_VEG_ENTERPRISE_BUDGET_RECORDS,
        SET_ALL_WEED_CONTROL_RECORDS,
    } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    filteredStartTime:[],
    filteredEndTime:[],
    allAgroRecords:[],
    allLandscapingRecords:[],
    allPestControlVegRecords:[],
    allHouseholdTermitesControlRecords:[],
    allAgricFieldTermiteControlRecords:[],
    allGrainProtectionRecords:[],
    allWeedControlRecords:[],
    allPestControlFieldRecords:[],
    allPublicHealthPestControlRecords:[],
    allVegEnterpriseBudgetRecords:[],
    allPestControlOrchardRecords:[],
    allSoilAnalysisRecords:[],
   
    selectedAgroRecord: null,

    agroForm:{
        clientName:null,
        clientPhoneNumber:null,
        agroCategory:null,
        date:new Date()
       // createdBy:null
        
    },

    filterForm:{
        startDate:null,
        endDate:null
    }

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedAgroRecord(state) {
        return state.selectedAgroRecord
      },

      filteredStartTime(state){
        return state.filteredStartTime
      },

      filteredEndTime(state){
        return state.filteredEndTime
      },
      //---------------------AGRO CONSULTS GETTERS--------------------------------------------//

    allAgroRecords(state){
        return state.allAgroRecords
    },

    allLandscapingRecords(state){
        return state.allLandscapingRecords
    },

    allPestControlVegRecords(state){
        return state.allPestControlVegRecords
    },

    allHouseholdTermitesControlRecords(state){
        return state.allHouseholdTermitesControlRecords
    },

    allAgricFieldTermiteControlRecords(state){
        return state.allAgricFieldTermiteControlRecords
    },

    allGrainProtectionRecords(state){
        return state.allGrainProtectionRecords
    },

    allWeedControlRecords(state){
        return state.allWeedControlRecords
    },

    allPestControlFieldRecords(state){
        return state.allPestControlFieldRecords
    },

    allPublicHealthPestControlRecords(state){
        return state.allPublicHealthPestControlRecords
    },

    allVegEnterpriseBudgetRecords(state){
        return state.allVegEnterpriseBudgetRecords
    },

    allPestControlOrchardRecords(state){
        return state.allPestControlOrchardRecords
    },

    allSoilAnalysisRecords(state){
        return state.allSoilAnalysisRecords
    },
    
  //----------------------------------------END OF AGRO SECTION----------------------------------------//

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING AgroRecordS
    [ADD_AGRO_RECORD](state, newAgroRecord){
        state.allAgroRecords.push(newAgroRecord)
    },

    [SET_SELECTED_AGRO_RECORD](state, newAgroRecord) {
        state.selectedAgroRecord = newAgroRecord
      },
    [SET_ALL_AGRO_RECORDS](state, payload) {
        state.allAgroRecords = payload
    },

    [GET_FILTERED_START_TIME](state, payload){
        state.filteredStartTime= payload
    },

    [GET_FILTERED_END_TIME](state, payload){
        state.filteredEndTime= payload
    },

    //------------------------------------AGRO MUTATIONS---------------------------------------------//
    [GET_ALL_AGRO_RECORDS](state, payload){
        state.allAgroRecords = payload
    },


    [GET_ALL_LANDSCAPING_RECORDS](state, payload){
        state.allLandscapingRecords = payload
    },

    [SET_ALL_LANDSCAPING_RECORDS](state, payload){
        state.allLandscapingRecords = payload
    },




    [GET_ALL_PEST_CONTROL_VEG_RECORDS](state, payload){
        state.allPestControlVegRecords = payload
    },
    

    [GET_ALL_HOUSEHOLD_TERMITES_CONTROL_RECORDS](state, payload){
        state.allHouseholdTermitesControlRecords = payload
    },

    [GET_ALL_AGRIC_FIELD_TERMITE_CONTROL_RECORDS](state, payload){
        state.allAgricFieldTermiteControlRecords = payload
    },

    [GET_ALL_GRAIN_PROTECTION_RECORDS](state, payload){
        state.allGrainProtectionRecords = payload
    },

    [GET_ALL_WEED_CONTROL_RECORDS](state, payload){
        state.allWeedControlRecords = payload
    },

    [GET_ALL_PEST_CONTROL_FIELD_RECORDS](state, payload){
        state.allPestControlFieldRecords = payload
    },

    [GET_ALL_PUBLIC_HEALTH_PEST_CONTROL_RECORDS](state, payload){
        state.allPublicHealthPestControlRecords = payload
    },

    [GET_ALL_VEG_ENTERPRISE_BUDGET_RECORDS](state, payload){
        state.allVegEnterpriseBudgetRecords = payload
    },

    [GET_ALL_PEST_CONTROL_ORCHARDS_RECORDS](state, payload){
        state.allPestControlOrchardRecords = payload
    },

    [GET_ALL_SOIL_ANALYSIS_RECORDS](state, payload){
        state.allSoilAnalysisRecords = payload
    },


    //-----------------------------------SETTERS---------------------------------------//
    
    [SET_ALL_PEST_CONTROL_VEG_RECORDS](state, payload){
        state.allPestControlVegRecords = payload
    },

    [SET_ALL_HOUSEHOLD_TERMITES_CONTROL_RECORDS](state, payload){
        state.allHouseholdTermitesControlRecords = payload
    },

    [SET_ALL_AGRIC_FIELD_TERMITE_CONTROL_RECORDS](state, payload){
        state.allAgricFieldTermiteControlRecords = payload
    },

    [SET_ALL_GRAIN_PROTECTION_RECORDS](state, payload){
        state.allGrainProtectionRecords = payload
    },

    [SET_ALL_WEED_CONTROL_RECORDS](state, payload){
        state.allWeedControlRecords = payload
    },

    [SET_ALL_PEST_CONTROL_FIELD_RECORDS](state, payload){
        state.allPestControlFieldRecords = payload
    },

    [SET_ALL_PUBLIC_HEALTH_PEST_CONTROL_RECORDS](state, payload){
        state.allPublicHealthPestControlRecords = payload
    },

    [SET_ALL_VEG_ENTERPRISE_BUDGET_RECORDS](state, payload){
        state.allVegEnterpriseBudgetRecords = payload
    },

    [SET_ALL_PEST_CONTROL_ORCHARDS_RECORDS](state, payload){
        state.allPestControlOrchardRecords = payload
    },

    [SET_ALL_SOIL_ANALYSIS_RECORDS](state, payload){
        state.allSoilAnalysisRecords = payload
    },

    //------------------------------------------------------------------------------------//

   
       
}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/agro/allAgroRecords`)

        //    if (newLoad.data.createdBy === this.$auth.user.email){

        //     console.log(newLoad);
        //   }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_AGRO_RECORDS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL AgroRecordS
    async getAllAgroRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/agro/allAgroRecords`)

        //const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
           console.log(response.data);
   
           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_AGRO_RECORDS, response.data);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getFilteredAgroRecords({ state,commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

             const newFilterRecord = cloneDeep(state.filterForm);

             newFilterRecord.startDate = newFilterRecord.startDate.toLocaleDateString('en-GB');

             newFilterRecord.endDate = newFilterRecord.endDate.toLocaleDateString('en-GB');

             console.log(newFilterRecord.startDate);
             console.log(newFilterRecord.endDate);
            
           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: response} = await api.get(`/agro/allAgroRecords`)

       //    const { data:fetchUsers } = await api.get(`/auth/allUsers`)
        
    //    //--------------------ALL AGRO RECORDS FILTERED BY CATEGORY --------------------------------// 
       const landscapingRecords = response.data.filter( a=>
        a.agroCategory ==='Landscaping establishment, mgt & pest control in lawns & ornaments'
       )

       const pestControlVegRecords = response.data.filter( b=>
        b.agroCategory ==='Pest control, mgt & fertilization in vegetable crops'
       )

       const householdTermitesRecords = response.data.filter( c=>
        c.agroCategory ==='Household termites control'
       )

       const agricFieldTermitesRecords = response.data.filter( d=>
        d.agroCategory ==='Agricultural field termite control'
       )

       const grainProtectionRecords = response.data.filter( e=>
        e.agroCategory ==='Grain Protection'
       )


       const weedControlRecords = response.data.filter( f=>
        f.agroCategory ==='Weed control in non-crop areas'
       )

       const pestControlFieldRecords = response.data.filter( g=>
        g.agroCategory ==='Pest control, mgt & fertilization in field crops'
       )

       
       const publicHealthRecords = response.data.filter( h=>
        h.agroCategory ==='Public health pest control'
       )

       const vegEnterpriseBudgetRecords = response.data.filter( i=>
        i.agroCategory ==='Vegetable enterprise budgets'
       )

       const pestControlOrchardsRecords = response.data.filter( j=>
        j.agroCategory ==='Pest control, mgt & fertilization in orchards'
       )

       const soilAnalysisRecords = response.data.filter( k=>
        k.agroCategory ==='Soil analysis(all crops)'
       )

  // -------------------------------END OF FILTERING BY CATEGORY----------------------//




   //--------FILTER CATEGORIES BY DATE AND SUMMATION OF EACH CATEGORY------------------//
         const filteredLandscapingRecords = landscapingRecords.filter( at => 
        at.date >= newFilterRecord.startDate && at.date <= newFilterRecord.endDate
        );

        const filteredPestControlVegRecords = pestControlVegRecords.filter( bt => 
            bt.date >= newFilterRecord.startDate && bt.date <= newFilterRecord.endDate
            );

        const filteredHouseholdTermitesRecords = householdTermitesRecords.filter( ct => 
        ct.date >= newFilterRecord.startDate && ct.date <= newFilterRecord.endDate
        );

        const filteredAgricFieldTermitesRecords = agricFieldTermitesRecords.filter( dt => 
        dt.date >= newFilterRecord.startDate && dt.date <= newFilterRecord.endDate
        );

        const filteredGrainProtectionRecords = grainProtectionRecords.filter( et => 
        et.date >= newFilterRecord.startDate && et.date <= newFilterRecord.endDate
        );

        const filteredWeedControlRecords= weedControlRecords.filter( ft => 
        ft.date >= newFilterRecord.startDate && ft.date <= newFilterRecord.endDate
        );

        const filteredPestControlFieldRecords = pestControlFieldRecords.filter( gt => 
        gt.date >= newFilterRecord.startDate && gt.date <= newFilterRecord.endDate
        );

        const filteredPublicHealthRecords = publicHealthRecords.filter( ht => 
            ht.date >= newFilterRecord.startDate && ht.date <= newFilterRecord.endDate
            );

        const filteredVegEnterpriseBudgetRecords = vegEnterpriseBudgetRecords.filter( it => 
        it.date >= newFilterRecord.startDate && it.date <= newFilterRecord.endDate
        );

        const filteredPestControlOrchardsRecords = pestControlOrchardsRecords.filter( jt => 
        jt.date >= newFilterRecord.startDate && jt.date <= newFilterRecord.endDate
        );

        const filteredSoilAnalysisRecords = soilAnalysisRecords.filter( kt => 
        kt.date >= newFilterRecord.startDate && kt.date <= newFilterRecord.endDate
        );
        
        console.log(filteredLandscapingRecords.length);

        var landscapingCount = filteredLandscapingRecords.length;

        console.log(landscapingCount);
        

        console.log(filteredPestControlVegRecords.length);

        console.log(filteredHouseholdTermitesRecords.length);

        console.log(filteredAgricFieldTermitesRecords.length);

        console.log(filteredGrainProtectionRecords.length);

        console.log(filteredWeedControlRecords.length);

        console.log(filteredPestControlFieldRecords.length);

        console.log(filteredPublicHealthRecords.length);

        console.log(filteredVegEnterpriseBudgetRecords.length);

        console.log(filteredPestControlOrchardsRecords.length);

        console.log(filteredSoilAnalysisRecords.length);

        
       //----------------------------END OF GRAIN PROTECTION---------------------------------//

        // const filteredTAR = response.data.filter( t => 
        //  t.date >= newFilterRecord.startDate && t.date <= newFilterRecord.endDate
        //  );

        // console.log(filteredTAR.length);


       
           

           console.log(response.data);
        //   console.log(fetchUsers.data)
         

        //    //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
        //    const filteredAgroRecords = allAgroRecords.data.filter( t => 
        //    t.createdBy === this.$auth.user.email
        //   );


        //   console.log(filteredAgroRecords);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_AGRO_RECORDS, response.data);

           commit(GET_FILTERED_START_TIME, newFilterRecord.startDate);

           commit(GET_FILTERED_END_TIME, newFilterRecord.endDate);

           commit(GET_ALL_LANDSCAPING_RECORDS, filteredLandscapingRecords);

           commit(GET_ALL_PEST_CONTROL_VEG_RECORDS, filteredPestControlVegRecords);

           commit(GET_ALL_HOUSEHOLD_TERMITES_CONTROL_RECORDS, filteredHouseholdTermitesRecords);

           commit(GET_ALL_AGRIC_FIELD_TERMITE_CONTROL_RECORDS, filteredAgricFieldTermitesRecords);

           commit(GET_ALL_GRAIN_PROTECTION_RECORDS, filteredGrainProtectionRecords);

           commit(GET_ALL_WEED_CONTROL_RECORDS, filteredWeedControlRecords);

           commit(GET_ALL_PEST_CONTROL_FIELD_RECORDS, filteredPestControlFieldRecords);

           commit(GET_ALL_PUBLIC_HEALTH_PEST_CONTROL_RECORDS, filteredPublicHealthRecords);

           commit(GET_ALL_VEG_ENTERPRISE_BUDGET_RECORDS, filteredVegEnterpriseBudgetRecords);

           commit(GET_ALL_PEST_CONTROL_ORCHARDS_RECORDS, filteredPestControlOrchardsRecords);

           commit(GET_ALL_SOIL_ANALYSIS_RECORDS, filteredSoilAnalysisRecords);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW AgroRecord TO ALL AgroRecordS
    async addNewAgroRecord({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newAgroRecord = cloneDeep(state.agroForm);

        //     newAgroRecord.date = state.agroForm.date.toLocaleDateString();



        //    // newAgroRecord.createdBy = 'kondwanim@livestock.co.zm'
        //    console.log(newAgroRecord.date);
           
           console.log(newAgroRecord);

           
            const response = await api.post(`/agro/addNewAgroRecord`, newAgroRecord);

            console.log(response.data);

            commit(ADD_AGRO_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectAgroRecord({ commit }, newAgroRecord) {
        try {
            commit(SET_SELECTED_AGRO_RECORD, newAgroRecord)
            console.log(newAgroRecord._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

  

}


  
    
