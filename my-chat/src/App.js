import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="chat-container">
      <div id="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div id="conversation-list">
        <div class="conversation active">
          <img src="https://m.media-amazon.com/images/M/MV5BZjcyMWEzMzAtY2RjMy00NTlhLWFlYzgtZWRlODk5NmY1OTQxXkEyXkFqcGdeQXVyMzQxNTk0ODg@._V1_.jpg" alt="Josefina" />
          <div class="title-text">Josefina</div>
          <div class="created-date">now</div>
          <div class="conversation-message">
            We are losing money!Quick!
          </div>
        </div>
      <div class="conversation">
          <img src="https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg?size=626&ext=jpg" alt="Alice Freeman" />
          <div class="title-text">Alice Freeman</div>
          <div class="created-date">1 seconds ago</div>
          <div class="conversation-message">
            You are the worst
          </div>
        </div>
        <div class="conversation">
          <img src="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/c0600498-748f-4bcf-9952-a6b060bd411d2afdbaf7563fcf87168f159e7727a650_thumb.jpg" alt="Velazquez" />
          <div class="title-text">Velazquez</div>
          <div class="created-date">1 minute ago</div>
          <div class="conversation-message">
            Quckly come to the meeting room 1B,we have a big server issue
          </div>
        </div>
        <div class="conversation">
          <img src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Barrera" />
          <div class="title-text">Barrera</div>
          <div class="created-date">1 hour ago</div>
          <div class="conversation-message">
            How are you?
          </div>
        </div>
        <div class="conversation">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrbJG6gMZ1o6wS97zmIdYiZ8bBBZ2Ucuqaw&usqp=CAU" alt="Izabella" />
          <div class="title-text">Izabella</div>
          <div class="created-date">1 week ago</div>
          <div class="conversation-message">
            Great!
          </div>
        </div>
        <div class="conversation">
          <img src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=" alt="John" />
          <div class="title-text">John</div>
          <div class="created-date">1 month ago</div>
          <div class="conversation-message">
            Nice
          </div>
        </div>
        <div class="conversation">
          <img src="https://www.c-and-a.com/marketing/c_scale,h_420,q_auto:eco,e_sharpen:70/202141/CC-Herren-Businessmode.jpg" alt="Mike" />
          <div class="title-text">Mike</div>
          <div class="created-date">2 month ago</div>
          <div class="conversation-message">
            Fine
          </div>
        </div>
        <div class="conversation">
          <img src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/17/15/hbz-hottest-men-justin-timberlake-gettyimages-103303556.jpg" alt="James" />
          <div class="title-text">James</div>
          <div class="created-date">3 month ago</div>
          <div class="conversation-message">
            Good luck
          </div>
        </div>
        <div class="conversation">
          <img src="https://nextluxury.com/wp-content/uploads/Top-75-Best-Manly-Hobbies-For-Men-1.jpg" alt="Robert" />
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
      <img src="https://i.pinimg.com/736x/4b/3c/5e/4b3c5e3aa9c7353f3f8fc9017c44a072.jpg" alt="Delete Conversation" />
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
          <img src="https://i.pinimg.com/736x/4b/3c/5e/4b3c5e3aa9c7353f3f8fc9017c44a072.jpg" alt="Daryl Duckmanton" />
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
              <img src="https://i.pinimg.com/736x/4b/3c/5e/4b3c5e3aa9c7353f3f8fc9017c44a072.jpg" alt="Daryl Duckmanton" />
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
              <img src="https://i.pinimg.com/736x/4b/3c/5e/4b3c5e3aa9c7353f3f8fc9017c44a072.jpg" alt="Daryl Duckmanton" />
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
              <img src="https://i.pinimg.com/736x/4b/3c/5e/4b3c5e3aa9c7353f3f8fc9017c44a072.jpg" alt="Daryl Duckmanton" />
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
          <img src="https://www.iconpacks.net/icons/2/free-attachment-icon-1483-thumb.png" alt="Add Attachment" />
          <input type="text" placeholder="type a message" />
        </div>
      </div>
  );
}

export default App;
