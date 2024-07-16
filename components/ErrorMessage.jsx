import React from 'react';
import { Text } from 'react-native';
function ErrorMessage({error,visible}) {
    return (
      <>
      {error&&visible&&<Text style={{color:"red"}}>{error}</Text>}
      </>
    );
}

export default ErrorMessage;