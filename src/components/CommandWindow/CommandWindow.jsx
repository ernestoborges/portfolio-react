import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"

export function CommandWindow(){

    const startArr = [
        "Initializing portfolioOS operating system...",
        "Checking for any system updates...",
        "Updates found, installing now...",
        "Installing update package 'portfolioOS23.3_security_patch'...",
        "Security patches installed successfully...",
        "Loading user configurations from ':\portfolioOS\Users\User1\Configurations.ini'...",
        "Configurations loaded successfully: GUI mode enabled, network adapter set to 'Hyp-Net'...",
        "Verifying hardware compatibility...",
        "Compatible hardware found: 32GB RAM, Hyp-GPU GTX 7000...",
        "Initiating system processes...",
        "Loading system libraries from ':\portfolioOS\Libs'...",
        "System libraries loaded successfully: 'Lib1', 'Lib2', 'Lib3', 'Lib4'...",
        "Discovering the truth about the Matrix...",
        "Do you want to take the red or blue pill?...",
        "Starting background services...",
        "Starting 'Service1', 'Service2', 'Service3', 'Service4', 'Service5'...",
        "Background services started successfully...",
        "Loading device drivers from ':\portfolioOS\Drivers'...",
        "Device drivers loaded successfully: 'Driver1', 'Driver2', 'Driver3', 'Driver4'...",
        "Scanning for security threats...","No security threats found...",
        "Establishing network connections...",
        "Loading network protocols from ':\portfolioOS\Protocols'...",
        "Network protocols loaded successfully: 'Hyp-TCP', 'Hyp-UDP', 'Hyp-DNS'...",
        "Running diagnostic tests...",
        "Diagnostic tests completed successfully: 100% system stability, 0 errors...",
        "Initialization complete. Welcome to the Matrix.",
        "",
        "",
        ""
    ]

    const arr = [
        ".welcome_message --en",
        " ",
        "Hello,",
        "You are about to access my portfolio.",
        "It's a web page that provides the user with an experience of using an old generic operating system.",
        "To fully enjoy the experience, it is recommended to use a device with a larger screen.",
        "Feel free to browse through the files and folders.",
        "The page may play some sound effects.",
    ];

    const [startText, setStartText] = useState([]);
    const [typedText, setTypedText] = useState('');
    const [paragraph, setParagraph] = useState([]);
    const [messageEnded, setMessageEnded] = useState(false);

    const navigate = useNavigate();

    function message(){
        let i = 1;
        let k = -1;
        const type = () => {
            let text = arr[k];
            setTypedText(text.slice(0, i));
            i++;

            if (i <= arr[k].length) {
                setTimeout(type, 10);
            } else {
                setTypedText("");
                setParagraph(prev => [...prev, arr[k-1]]);
                phrase();
            }
        };
        const phrase = () => {
            k++;
            if(k < arr.length){
                i = 0;
                setTimeout(type, 10);
            } else {
                setMessageEnded(true)
            }
        }
        phrase();
    };

    useEffect(() => {
        let i = 0;  
        const print = () => {
            setStartText(prev => [...prev, startArr[i < startArr.length ? i : startArr.length - 1]]);
            i++;
            if (i <= startArr.length) {
                setTimeout(print, Math.floor(Math.random() * 301 + 1));
            } else {
                message();
            }
        };
        print();
    }, []);

  return (
    <article className="system-window">
      <header>
        <p>-----------------</p>
        <p>Starting System</p>
        <p>-----------------</p>
      </header>
      <section>
        {
            startText.map((text, i)=> (
                <p key={i} className="gray-text">{`> ${text}`}</p>
            ))
        }
        {
            paragraph.map((phrase, i)=> (
                <p key={i}>{`> ${phrase}`}</p>
            ))
        }
        <p>{`> ${typedText}`}</p>
        {
            messageEnded
            && <footer>
                    <p>Click 'Enter' button to proceed</p>
                    <button onClick={()=>navigate("/login")}>Enter</button>
                </footer>
        }
      </section>
    </article>
  );
}