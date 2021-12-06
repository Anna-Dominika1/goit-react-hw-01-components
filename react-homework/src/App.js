import React from "react";

import Profile from "./profil/Profil";
import user from "./user.json";
import profileStyles from "./profil/profilstyle.css";
import statsStyles from "./stats/stats.css";
import Statistics from "./stats/Stats";
import data from "./data.json";
import friends from "./friends.json";
import FriendList from "./friendList/FriendList";
import friendsStyles from "./friendList/friends.css";
import transactions from "./transactions/transactions.json";
import TransactionHistory from "./transactions/TransactionHistory";
import transactionsStyles from "./transactions/transactions.css";
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
