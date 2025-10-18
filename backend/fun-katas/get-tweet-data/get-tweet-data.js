// Please do not change the name of this function
//{tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 1 }
function getTweetData(tweet) {
  if (tweet.length === 0) {
    return {};
  }
   let data = {
    tags: [],
    mentions: [],
    tagCount: 0,
    mentionCount: 0,
    length: tweet.length,
  };

  const regexMention = /@\S+/g
  const regexTag = /#\S+/g
  const mention = tweet.match(regexMention)
  const tags = tweet.match(regexTag)
 
  if (mention) {
    data.mentions = [...new Set(mention)];
    data.mentionCount++
  }

  if (tags) {
    data.tags = [...new Set(tags)];
    data.tagCount++
  }
  return data;
}

module.exports = getTweetData;
