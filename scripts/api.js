class TriviaAPI {
    constructor(){
       this.baseUrl = `https://opentdb.com/api.php?type=multiple&amount=`
    }
    async getEasy(amount){
       const response = await axios.get(`${this.baseUrl}${amount}&difficulty=easy`)
       console.log(response.data.results)
       return response.data.results
    }
    async getMedium(amount){
       const response = await axios.get(`${this.baseUrl}${amount}&difficulty=medium`)
       console.log(response.data.results)
       return response.data.results
    }
    async getHard(amount){
       const response = await axios.get(`${this.baseUrl}${amount}&difficulty=hard`)
       console.log(response.data.results)
       return response.data.results
    }
 }