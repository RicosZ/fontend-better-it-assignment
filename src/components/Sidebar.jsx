import SideNav, { Toggle, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  navigate('/analytics');
  return <SideNav onSelect={selected => {
    console.log(selected);
    navigate(selected)
  }}
    className='SideNav'
  >
    <SideNav.Toggle />
    <SideNav.Nav defultSelected="/analytics">
      <NavItem eventKey='/analytics'>
        <NavIcon>
          <i class="fas fa-database" style={{ fontSize: "1.5em" }} />
        </NavIcon>
        <NavText>DATA ANALYTICS</NavText>
      </NavItem>
      <NavItem eventKey='INTENTS'>
        <NavIcon>
          <i class="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} />
        </NavIcon>
        <NavText>INTENTS</NavText>
      </NavItem>
      <NavItem eventKey='/entities'>
        <NavIcon>
          <i class="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} />
        </NavIcon>
        <NavText>ENTITIES</NavText>
      </NavItem>
      <NavItem eventKey='CONVERSATION FLOW'>
        <NavIcon>
          <i class="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} />
        </NavIcon>
        <NavText>CONVERSATION FLOW</NavText>
      </NavItem>
      <NavItem eventKey='BUSINESS LOGIC'>
        <NavIcon>
          <i class="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} />
        </NavIcon>
        <NavText>BUSINESS LOGIC</NavText>
      </NavItem>
      <NavItem eventKey='RULE-BASED'>
        <NavIcon>
          <i class="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} />
        </NavIcon>
        <NavText>RULE-BASED</NavText>
      </NavItem>
      <NavItem eventKey='NLP'>
        <NavIcon>
          <i class="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} />
        </NavIcon>
        <NavText>NLP</NavText>
      </NavItem>

    </SideNav.Nav>
  </SideNav>
}
