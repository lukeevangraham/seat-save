import React from "react";
import { connect } from "react-redux";
import SettingsForm from "./SettingsForm/SettingsForm";
import { fetchChurchSettings, updateChurchSettings } from "../../store/actions/index";

const Settings = (props) => {
  React.useEffect(() => {
    props.fetchChurchSettings();
  }, []);

  const onSubmit = (formValues) => {
    props.updateChurchSettings(formValues);
  };

  let form = <div>Loading...</div>;

  if (props.church.adminEmail.length > 0) {
    form = <SettingsForm initialValues={props.church} onSubmit={onSubmit} />;
  }

  return (
    <div>
      <h2>Church Settings</h2>
      {form}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    church: state.church,
  };
};

export default connect(mapStateToProps, { fetchChurchSettings, updateChurchSettings })(Settings);
