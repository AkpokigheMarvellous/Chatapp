import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="a70d83cc-5bc9-4c5e-95b2-ab54d6c739f4"
            userName="marvend"
            userSecret="pass"
        />
    );
}

export default App;