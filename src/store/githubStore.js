import create from 'zustand';
import axios from 'axios';

const useGithubStore = create(set => ({
  repositories: {},
  getRepositories: async ()=> {
    const response = await axios.get('/api/repositories.json')
    set({ repositories: response.data })
  },
  developers: {},
  getDevelopers: async ()=> {
    const response = await axios.get('/api/developers.json')
    set({ developers: response.data })
  },
  loading: false,
  setLoading: (value) => set(state => ({ loading: value })),
}))

export default useGithubStore;