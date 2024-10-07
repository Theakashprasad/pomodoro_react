// store.js
import create from 'zustand';

const useStore = create((set) => ({
  video: 'https://pomodo.s3.eu-north-1.amazonaws.com/aesthetic+anime+car+shorts+loop+_+youtube+shorts+_+gif+loop+%23shorts+(1).mp4', 
  setVideo: (video) => set({ video }),
}));

export default useStore;
