import React from 'react';
import { Profile } from './Profile';

export function UserList() {
  const userList = [
    { name: "saravanan", pic: "https://www.koimoi.com/wp-content/new-galleries/2022/07/virat-kohli-receives-tons-of-support-amidst-backlash-over-recent-performances-from-his-smile-being-compared-to-jokers-more-heres-what-netizens-say-01.jpg" },
    { name: "saravanan", pic: "https://www.koimoi.com/wp-content/new-galleries/2022/07/virat-kohli-receives-tons-of-support-amidst-backlash-over-recent-performances-from-his-smile-being-compared-to-jokers-more-heres-what-netizens-say-01.jpg" },
    { name: "saravanan", pic: "https://www.koimoi.com/wp-content/new-galleries/2022/07/virat-kohli-receives-tons-of-support-amidst-backlash-over-recent-performances-from-his-smile-being-compared-to-jokers-more-heres-what-netizens-say-01.jpg" },
  ];

  return (
    <div>
      {userList.map((user, index) => (
        <Profile key={index} name={user.name} pic={user.pic} />
      ))}
    </div>
  );
}
