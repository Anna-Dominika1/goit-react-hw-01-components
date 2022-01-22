import React from "react";

import Profile from "./profil/Profil";
import Statistics from "./stats/Stats";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactions/TransactionHistory";

import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};

export default App;
