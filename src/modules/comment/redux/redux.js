import { NativeModules } from "react-native";
import { ThemeConsumer } from "react-native-elements";
import {createStore} from "redux";

var defaultState = {
  comment: '',
  comments: [
    {
      ownerName: "Nguyen Van A",
      content: "Con ca map co 2 cai tay",
      postedTime: "20/10/2020 09:30",
      expanded: false
    },
    {
      ownerName: "Nguyen Van B",
      content: "You watch your boy struggle with giving up the turtle, returning it to the pond where he’d found it on a walk— first time you’d all been out in days. How thoughtful he thought he’d been, making it a home in the home where the family sheltered in place. How he cared for his armored friend. Having picked flowers, knowing they’d die, you understand the urge to pluck the exotic, the beautiful—any diversion from fear, which is in itself a disease. That morning, you helped your boy give up the idea of living forever.",
      postedTime: "20/10/2020 09:30",
      expanded: false
    },
    {
      ownerName: "Nguyen Van C",
      content: "Con ca map co 2 cai tay\nXe oto co 3 banh\nVan ly truong thanh nam o Trung Quoc\nHom nay toi co 1 ngay nghi\nToi dang try hard cho project nay",
      postedTime: "20/10/2020 09:30",
      expanded: false
    },
    {
      ownerName: "Nguyen Van D",
      content: "Earlier, when the ink was thinner, I was ruining my eyes in bad light as a favor to you In a belief that the best opportunities are exacted from the dark I was given new maps every day To prevent news of my arrival From reaching any further than the next hill I always knew you'd be there Waiting with the door half-open And all the lights on upstairs Languishing with some bad news At the end of a few well connected thoughts When a more comprehensive perspective was what was needed So I turned and faced the man on the hill Who was sketching the battle from memory Assumption and conviction had come to mean the same thing for both of us He thought he should put something down on paper Here near the top of the page Lest you think his work was of some personal interest to anyone",
      postedTime: "20/10/2020 09:30",
      expanded: false
    },
    {
      ownerName: "Nguyen Van E",
      content: "Con ca map co 2 cai tay\nXe oto co 3 banh\nVan ly truong thanh nam o Trung Quoc\nHom nay toi co 1 ngay nghi\nToi dang try hard cho project nay",
      postedTime: "20/10/2020 09:30",
      expanded: false
    },
    {
      ownerName: "Nguyen Van F",
      content: "tired i count the ways in which it determines my life permeates everything. it's in the air lives next door to me in stares of neighbors meets me each day in the office. its music comes out the radio drives beside me in my car. strolls along with me down supermarket aisles it's on television and in the streets even when my walk is casual/undefined it's overhead flashing lights i find it in my mouth when i would speak of other things",
      postedTime: "20/10/2020 09:30",
      expanded: false
    },
    {
      ownerName: "Nguyen Van G",
      content: "Con ca map co 2 cai tay\nXe oto co 3 banh\nVan ly truong thanh nam o Trung Quoc\nHom nay toi co 1 ngay nghi\nToi dang try hard cho project nay",
      postedTime: "20/10/2020 09:30",
      expanded: false
    },
  ]
};

exports.ACTION_TYPE = ACTION_TYPE = {
    LOAD_MORE: "LOAD_MORE",
    TOGGLE_EXPAND: "TOGGLE_EXPAND",
    NEW_COMMENT: "NEW_COMMENT",
    NEW_MY_COMMENT: "NEW_MY_COMMENT",
    TYPE_COMMENT: "TYPE_COMMENT"
}

const reducer = (state, action)=>{
  if (Object.keys(state).length == 0)
    state = defaultState;
  switch (action.type){
    case ACTION_TYPE.LOAD_MORE:
      var newComments = createComment().concat(state.comments)
      return {...state, comments: newComments}
    case ACTION_TYPE.TOGGLE_EXPAND:
      let _comments = state.comments.map((item, index)=>{
        if (index == action.index) 
          return {
            ...item,
            expanded: !item.expanded
          }
        else
          return {
            ...item
          }
      })
      return {...state, comments: _comments}
    case ACTION_TYPE.NEW_COMMENT:
      var newComments = state.comments.concat(createComment())
      return {
        ...state,
        comments: newComments
      }
    case ACTION_TYPE.NEW_MY_COMMENT:
      var newComments = state.comments.concat(createMyComment(action))
      return {
        ...state,
        comments: newComments,
        comment: ""
      }
    case ACTION_TYPE.TYPE_COMMENT: 
      return {
        ...state,
        comment: action.comment
      }
    default:
      return state;
  }
}

exports.store = createStore(reducer, {});

const createComment = ()=>{
  let num = 2
  let comments = []
  for (let i =0; i<num; i++)
    comments.push({
      ownerName: "User " + i,
      postedTime: new Date().toString(),
      content: "Post By User " + i,
      expanded: false
    })
  return comments
}

const createMyComment = (data)=>{
  return {
    ...data
  }
}

const GUARDIAN_MAX = 4;