import { useState, useEffect } from "react";
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {useHistory,Link} from 'react-router-dom'
import membersBL from '../utils/membersUtils';
import SubPerMember from "../subscriptions/SubPerMember";
import subBL from '../utils/subscriptionUtils'

const useStyles = makeStyles({
  root: {maxWidth: 345,margin: 10},

});

function MemberComp(props) {
  let history = useHistory();
  const classes = useStyles();
  const [memID] = useState(props.memId);
  const [member, setMember] = useState({});
 

  useEffect(() => {
    let isMounted = true; 
    async function fetchData() {
      let result = await membersBL.getMember(memID);
      if(isMounted){setMember(result.data)
      }
    }
    fetchData();
    return  () => { isMounted = false };
  }, [memID])



  const goToEdit = ()=>
  {
    props.history.push("/main/subs/edit-member/" + memID)
  } 

  const deleteMember =  async (history,memID)=>
  {
    let result = await membersBL.deleteMember(memID);
    let result2 = await subBL.deleteSubPerMember(memID)
    alert(result.data);
      history.push('/members')
  }

  return (

    <Card className={classes.root}>
        Name: {member.name}<br/>
        Email: {member.email} <br/>
        City: {member.city}<br/>
      <Button onClick={goToEdit}>
        Edit
      </Button>
      <Button size="small" color="primary" onClick={deleteMember}>
        Delete 
      </Button>
    <SubPerMember memId={memID}/>
  </Card>


  );
}

export default withRouter(MemberComp) ;