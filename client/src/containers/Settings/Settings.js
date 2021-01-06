import React from "react";
import { connect } from "react-redux";
import SettingsForm from "./SettingsForm/SettingsForm";
import { fetchChurchSettings } from "../../store/actions/index";

const Settings = (props) => {
  React.useEffect(() => {
    props.fetchChurchSettings()
  }, []);

  let form = <div>Loading...</div>

  if (props.church.adminEmail.length > 0) {
    {console.log("CHURCH: ", props.church)}
    form = <SettingsForm initialValues={props.church} />
  }

  return (
    <div>
      <h2>Settings</h2>
      {form}
    </div>
  );
};

const mapStateToProps = state => {
    return {
        church: state.church
    }
}

export default connect(mapStateToProps, { fetchChurchSettings })(Settings);
