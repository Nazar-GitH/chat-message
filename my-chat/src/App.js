import './App.css';

function App() {
  return (
    <div id="chat-container">
      <div id="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div id="conversation-list">
        <div class="conversation active">
          <img src={require("./images/images-women-1.jpg")} alt="Josefina" />
          <div class="title-text">Josefina</div>
          <div class="created-date">now</div>
          <div class="conversation-message">
            We are losing money!Quick!
          </div>
        </div>
      <div class="conversation">
          <img src={require("./images/images-women-2.jpg")} alt="Alice Freeman" />
          <div class="title-text">Alice Freeman</div>
          <div class="created-date">1 seconds ago</div>
          <div class="conversation-message">
            You are the worst
          </div>
        </div>
        <div class="conversation">
          <img src={require("./images/images-men-1.jpeg")} alt="Velazquez" />
          <div class="title-text">Velazquez</div>
          <div class="created-date">1 minute ago</div>
          <div class="conversation-message">
            Quckly come to the meeting room 1B,we have a big server issue
          </div>
        </div>
        <div class="conversation">
          <img src={require("./images/images-women-3.jpg")} alt="Barrera" />
          <div class="title-text">Barrera</div>
          <div class="created-date">1 hour ago</div>
          <div class="conversation-message">
            How are you?
          </div>
        </div>
        <div class="conversation">
          <img src={require("./images/images-women-1.jpg")} alt="Izabella" />
          <div class="title-text">Izabella</div>
          <div class="created-date">1 week ago</div>
          <div class="conversation-message">
            Great!
          </div>
        </div>
        <div class="conversation">
          <img src={require("./images/images-men-2.jpg")} alt="John" />
          <div class="title-text">John</div>
          <div class="created-date">1 month ago</div>
          <div class="conversation-message">
            Nice
          </div>
        </div>
        <div class="conversation">
          <img src={require("./images/images-men-3.jpg")} alt="Mike" />
          <div class="title-text">Mike</div>
          <div class="created-date">2 month ago</div>
          <div class="conversation-message">
            Fine
          </div>
        </div>
        <div class="conversation">
          <img src={require("./images/images-men-3.jpg")} alt="James" />
          <div class="title-text">James</div>
          <div class="created-date">3 month ago</div>
          <div class="conversation-message">
            Good luck
          </div>
        </div>
        <div class="conversation">
          <img src={require("./images/images-men-3.jpg")} alt="Robert" />
          <div class="title-text">Robert</div>
          <div class="created-date">4 month ago</div>
          <div class="conversation-message">
            Congratulation
          </div>
        </div>
    </div>
    <div id="new-message-container">
      <span>+</span>
    </div>
    <div id="chat-title">
      <span>Daryl Duckmanton</span>
      <img src={require("./images/images-men-3.jpg")} alt="Delete Conversation" />
    </div>
    <div id="chat-message-list">
      <div class="message-row you-message">
        <div class="message-content">
          <div class="message-text">Ok then</div>
          <div class="message-time">Apr 16</div>
        </div>
      </div>
      <div class="message-row other-message">
        <div class="message-content">
          <img src={require("./images/images-men-2.jpg")} alt="Daryl Duckmanton" />
          <div class="message-text">
            Yeah I think it is best we do that. Otherwise things won't work well at all.
          </div>
          <div class="message-time">Apr 16</div>
          </div>
          </div>
          <div class="message-row you-message">
            <div class="message-content">
              <div class="message-text">
                Maybe we can use Jim's studio
              </div>
              <div class="message-time">Apr 15</div>
            </div>
          </div>
          <div class="message-row other-message">
            <div class="message-content">
              <img src={require("./images/images-men-2.jpg")} alt="Daryl Duckmanton" />
              <div class="message-text">
                All I know is where I live it's too hard
                to record because of all the street noise
              </div>
              <div class="message-time">Apr 16</div>
            </div>
          </div>
          <div class="message-row you-message">
            <div class="message-content">
              <div class="message-text">
                Well we need to work out sometime soon where 
                we really want to record our video course. 
              </div>
              <div class="message-time">Apr 15</div>
            </div>
          </div>
          <div class="message-row other-message">
            <div class="message-content">
              <img src={require("./images/images-men-2.jpg")} alt="Daryl Duckmanton" />
              <div class="message-text">
                I am just in the process of finishing off the 
                last pieces of material for the cource.
              </div>
              <div class="message-time">Apr 15</div>
            </div>
          </div>
          <div class="message-row you-message">
            <div class="message-content">
              <div class="message-text">
                How's it going?
              </div>
              <div class="message-time">Apr 13</div>
            </div>
          </div>
          <div class="message-row other-message">
            <div class="message-content">
              <img src={require("./images/images-men-2.jpg")} alt="Daryl Duckmanton" />
              <div class="message-text">
                Hey mate what's up?
              </div>
              <div class="message-time">Apr 13</div>
            </div>
          </div>
          <div class="message-row you-message">
            <div class="message-content">
              <div class="message-text">
                Hey Daryl?
              </div>
              <div class="message-time">Apr 13</div>
            </div>
          </div>
        </div>
        <div id="chat-form">
          <img src={require("./images/images-men-2.jpg")} alt="Add Attachment" />
          <input type="text" placeholder="type a message" />
        </div>
      </div>
  );
}

export default App;
