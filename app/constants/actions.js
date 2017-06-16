import mirrorCreator from 'mirror-creator';

const mirrorCreatedConstants = mirrorCreator([

    //  sagas
    'LOGIN_SAGA',

    //  actions
    'LOGIN',
    'LOGOUT',
]);

export default {
    ...mirrorCreatedConstants,
};
