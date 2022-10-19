import { useModal } from "../../../utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import WalletModalStyleWrapper from "./WalletModal.style";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import metamaskIcon from "../../../assets/images/icon/MetaMask.svg";
import formatic from "../../../assets/images/icon/martian_wallet.png";
import trustWalletIcon from "../../../assets/images/icon/petra_wallet.jpg";
import walletConnect from "../../../assets/images/icon/pontem_wallet.jpg";
//import useMetaMask from "../../../hooks/useMetaMask";

const WalletModal = () => {
  const { walletModalHandle } = useModal();
  //const {connect, disconnect, isActive, account} = useMetaMask(); 

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div
          className="mint_modal_box"
        >
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <button onClick={() => walletModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <p>
                Please select a wallet to connect for start Minting your NFTs
              </p>
              <div className="wallet_list">
                <a href="# ">
                  <img src={metamaskIcon} alt="Meta-mask" />
                  MetaMask
                  <span>
                    <FiChevronRight />
                  </span>
                  {/* <button >connect</button> */}
                </a>
                <a href="# ">
                  <img src={formatic} alt="Coinbase" style={{height:"30px"}} />
                  Martian Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a href="# ">
                  <img src={trustWalletIcon} alt="Trust" style={{height:"30px"}}/>
                  Petra Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a href="# ">
                  <img src={walletConnect} alt="Wallet" style={{height:"30px"}} />
                  Pontem Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <a href="# ">Terms of Service</a>
                <a href="# ">Privacy Policy</a>
              </div>
            </div>

            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
              <span className="modal_bottom_shape shape_right">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default WalletModal;
