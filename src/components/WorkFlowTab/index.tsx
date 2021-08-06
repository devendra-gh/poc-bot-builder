import { useState } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { types } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "5px",
    marginLeft: "-1px",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },

  tab: {
    padding: "5px",
    borderTop: "solid 1px #a2a7b2",
    borderRight: "solid 1px #a2a7b2",
    borderLeft: "solid 1px #a2a7b2",
    backgroundColor: "#455aa2b3",
    color: "white",
    marginRight: "1px",
    minWidth: "80px",
    textAlign: "center",
    cursor: "pointer",

    "&.active": {
      backgroundColor: "#455aa2",
      zIndex: 1,
    },
  },
}));

const Tab = (props: any) => {
  const classes = useStyles();

  return (
    <Box
      className={`${classes.tab} ${props.isActive ? "active" : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </Box>
  );
};

const WorkFlowTab = ({ workFlowState, onChangeWorkFlow }: any) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = workFlowState?.flows?.map((flow: any) => {
    return {
      id: flow.id,
      name: flow.name,
    };
  });
  tabs?.push({ id: types.ON_ADD_WORKFLOW, name: "Add" });

  const onTabChange = (index: any, id: any) => {
    // Call to update last workflow
    onChangeWorkFlow({
      type: types.ON_UPDATE_WORKFLOW,
      workFlowIndex: activeTab,
    });

    if (id === types.ON_ADD_WORKFLOW) {
      // Call to add new workflow
      onChangeWorkFlow({ type: types.ON_ADD_WORKFLOW, workFlowIndex: index });
    } else {
      // Call to change new workflow
      onChangeWorkFlow({
        type: types.ON_CHANGE_WORKFLOW,
        workFlowIndex: index,
      });
    }

    setActiveTab(index);
  };

  return (
    <Box className={classes.root}>
      {tabs?.map((tab: any, index: any) => (
        <Tab
          isActive={index === activeTab}
          key={`${tab.id}`}
          onClick={() => {
            onTabChange(index, tab.id);
          }}
        >
          {tab.name}
        </Tab>
      ))}
    </Box>
  );
};

export default WorkFlowTab;
