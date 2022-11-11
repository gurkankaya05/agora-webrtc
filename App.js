import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {Text} from 'react-native'
const App = () =>{
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: '577eed4880ea41c4b8318d366678d76f',
    channel: 'test',
    token: '007eJxTYAhfueJ24sVsx0mVew7EdX9eFicUbHWzbV6jwU5fGe8N/8QUGEzNzVNTU0wsLAxSE00Mk02SLIwNLVKMzczMzC1SzM3SGCzzkhsCGRkkFsUxMjJAIIjPwlCSWlzCwAAAYJMekg==',
};
const callbacks = {
  EndCall: () => setVideoCall(false),
};
 
    return videoCall ? (
      
      <AgoraUIKit styleProps={{localBtnContainer:{borderTopLeftRadius:20,borderTopRightRadius:20,height:90,backgroundColor:'#262230'},localBtnStyles:{endCall:{backgroundColor:'red'}, muteLocalAudio:{backgroundColor:'#741952',borderColor:'#741952'},muteLocalVideo:{backgroundColor:'#741952',borderColor:'#741952'},switchCamera:{backgroundColor:'#741952',borderColor:'#741952'},}}}  connectionData={connectionData} rtcCallbacks={callbacks} />
  ) : (
      <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
  
}
export default App;