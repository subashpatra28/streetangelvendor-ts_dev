import { Modal } from "@mui/material";
import { useState } from "react";

import FullPageLoader from ".";

const FullPageLoaderModal = (props: $TSFixMe) => {
  const [alertModalVisible, setalertModalVisible] = useState(true);

  return (
    <Modal
      className="modalLoader"
      open={alertModalVisible}
      BackdropProps={{ style: { backgroundColor: "#ffffff00" } }}
    >
      <FullPageLoader
        isLoading={props.isLoading}
        onLoadingDone={setalertModalVisible}
      />
    </Modal>
  );
};

export default FullPageLoaderModal;
