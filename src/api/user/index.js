import constants from '../constants';

const updateUserDetails = async (userID, passwordHash, details) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('update-user'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        userID,
        password: passwordHash,
        toUpdate: details,
      }),
    });

    // await the json response of the server
    const result = await response.json();

    if (result.result) {
      return result;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export default updateUserDetails;

// export const getUserDetails = async (userID, passwordHash) => {
//   try {
//     // fetch request for getting the user groups
//     const response = await fetch(constants.endpoint('get-groups'), {
//       method: 'POST',
//       headers: constants.headers,
//       body: JSON.stringify({
//         userID,
//         password: passwordHash,
//       }),
//     });

//     // await the json response of the server
//     const result = await response.json();

//     if (result.result) {
//       return JSON.parse(result.data);
//     }

//     return {};
//   } catch (error) {
//     return {};
//   }
// };
