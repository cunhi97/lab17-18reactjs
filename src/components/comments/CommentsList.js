import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = (props) => {// props = loadedComments trong component Comments => hiển thị list comment được thêm vào   
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
