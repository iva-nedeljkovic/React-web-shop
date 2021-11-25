import Commerce from '@chec/commerce.js';


// kreirame instanca od prodavnicata, true znaci deka kje kreira store
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true, {
    axiosConfig: {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  })
 