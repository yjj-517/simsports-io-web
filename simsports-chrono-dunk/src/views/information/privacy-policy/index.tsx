// privacy-policy
import React, { useState } from "react";

const View: React.FC = () => {
	//privacy-policy-数据
	const [privacyPolicyData] = useState<any[]>([
		{
			title: "1.Introduce",
			text: [
				'1.1 METAPROPHET PTE. LTD. ("MP") recognizes that people who use our products pay great attention to their privacy. This privacy policy provides detailed information on how we collect, use, and disclose important user information within the game titled Chrono Dunk ("Game"). MP provides this privacy policy to help you understand how we use your personal information and the choices you have regarding that use. By using the Game, you agree that we may collect, use, disclose, and process your information in the manner described in this privacy policy. This privacy policy applies only to the Game and does not apply to any other websites, products, or services that you may access or link to through the Game. We encourage you to read the privacy policies of any other services you interact with before providing them with your information. Although our core values will not change, the Game may evolve over time, and this privacy policy will be updated accordingly to reflect such developments. If we make any changes, we will notify you by revising the date at the top of this privacy policy. In some cases, if the changes are significant, we may provide additional notice. We encourage you to review this privacy policy regularly to stay informed about our practices. Some third-party providers may place cookies or pixels on your browser or device—small data files stored in your device memory. Please note that this privacy policy does not cover the use of cookies or pixels by such third parties. Most web browsers are set to accept cookies and pixels by default, but you can usually set your browser to delete or reject them. However, if you choose to delete or reject cookies or pixels, your ability to use the Game may be affected.',
				"1.2 This Privacy Policy should be read in conjunction with our Terms of Use. By accessing the game, you agree to the information collection and usage practices described in this Privacy Policy.",
				"1.3 Your use of the game and any personal information you provide through the game remain bound by this privacy policy and our terms of use, each of which may be updated from time to time.",
				"1.4 Any questions, comments or complaints you may send via email to newgranulegames@gmail.com",
			],
		},
		{
			title: "2. The information we collect",
			text: [
				"The personal information we collect from you may typically include:",
				"2.1 Network information related to transactions, including but not limited to the type of device you are using, access time, hardware model, MAC address, IP address, operating system and OS version, and other unique device identifiers.",
				"2.2 We may receive network information from you due to your interaction with our game.",
				"2.3 When you register as a user, we may collect the following personal information from you: your email address and username. After registration, we allow you to link to third-party social network accounts. In this case, we may receive personal information you provide to these third parties, and you have allowed them to forward it through your privacy settings.",
			],
		},
		{
			title: "3. How MP uses your personal information",
			text: [
				"3.1 Like almost all interactions that occur on the World Wide Web, our servers may receive information, including but not limited to IP addresses, due to your interactions with them.",
				"3.2 Some services in our game require permissions, which may be used to access additional personal information. These permissions are only used for very limited technical purposes to allow the game to interact correctly with your browser. We will not obtain any other information except for providing necessary information for the game. Without your consent, the received information will not be shared with any third party, unless these third parties are associated with MP or necessary for providing games.",
				"3.3 MP collects usage data to monitor network traffic and improve our products. Any identification information collected through ThinkingData is controlled by ThinkingData.",
			],
		},
		{
			title: "4. How do we handle the collected information",
			text: [
				"4.1 MP may use the information we collect in the following ways:",
				"• Analyze trends in website and game usage;",
				"• Improve websites and games;",
				"• Help personalize your website and gaming experience;",
				"• If you provide us with your contact information, we may use it to contact you, send you technical notifications, updates, confirmations, security alerts, provide support, inform you of other products and services that we believe may be of interest to you, or respond to your comments or questions;",
				"• If you link to a social network account, we may share your achievements and goals in the game on relevant social networks.",
				"• Your SimSports.io account username will be used in the game and can be seen by other game users.",
				"4.2 MP may share the information we collect with third parties who need to access it to complete the work on our behalf, including but not limited to helping us make the website or game available, including but not limited to payment service providers, anti fraud service providers, or providing analysis services for us. We strive to ensure that these third parties only access and use your information as needed to complete their functions.",
				"4.3 MP may create aggregations and anonymities that contain your information, but it will not directly identify you. MP can use and/or share these aggregations and anonymities for various purposes related to websites, games, or our company and its business.",
				"4.4 MP may disclose your personal information to our subsidiaries, affiliates, agents, businesses, or service providers who process your services on our behalf. Our agreements with these service providers limit the types of information they can use or process, and ensure that they do their best to protect the security of your personal information.",
				"4.5 MP also reserves the right to disclose with reasonable confidence any personal information that MP deems appropriate or necessary to enforce our terms of use, take preventive measures to prevent liability or damage, investigate and respond to third-party claims or accusations, respond to court orders or official requests, protect the safety or integrity of our game, and protect the rights, property, or safety of MP, our users, or others.",
				"4.6 If MP is involved in events such as mergers, acquisitions, sales, bankruptcy, reorganization, takeover, distribution for the benefit of creditors, or changes in control of laws or principles of fairness applicable to creditor rights, it may disclose your information to another entity related to such events.",
			],
		},
		{
			title: "5. Your Choice",
			text: [
				"MP will process your personal information in accordance with this privacy policy, and as part of this section, you will have little or no opportunity to modify how MP uses your information.",
			],
		},
		{
			title: "6. Cookies",
			text: [
				"Our website uses' Cookies', which are text files placed on your computer that help MP analyze how users use the website, as well as similar technologies such as network beacons, pixels, advertising labels, and device identifiers, to identify you and/or your device on our website, shut down, and cross different devices. The use of cookies is standard on the internet. Although most web browsers automatically accept cookies, the decision to accept or not is up to you. You can adjust your browser settings to prevent the use of cookies, or provide notifications every time cookies are sent. You can choose to reject the use of cookies in the appropriate settings on the browser. However, please note that if you do so, you may not be able to access all the features of our website.",
			],
		},
		{
			title: "7. Information we do not collect",
			text: [
				"We will not collect any other personally identifiable information from you unless you provide it directly to us: by filling out a form, providing us with written feedback, communicating with us through third-party social media websites, or communicating with us through websites, games, or any other means.",
			],
		},
		{
			title: "8. Information Security",
			text: [
				"Although we and any other organization cannot guarantee the security of information processed online, we have indeed taken appropriate security measures to protect your personal information. For example, we store the personal information you provide on a computer system with limited access, encryption, or both.",
			],
		},
		{
			title: "9. Privacy Rights",
			text: [
				"According to applicable laws, you may have some or all of the following rights to your personal information: (i) Obtain copies of your personal information and information on how and on what basis to process that personal information; (ii) Correcting inaccurate personal information (including the right to complete incomplete personal information); (iii) Delete your personal information in limited circumstances (when it is no longer related to the purpose of collection or processing); (iv) Restrict the processing of your personal information under the following circumstances: a Some people question the accuracy of personal information; b. Processing is illegal, but you oppose deleting personal information; Or c. We no longer need personal information, but it still needs to be claimed, exercised, or defended in accordance with legal requirements; (v) Challenge our handling based on legitimate interests (rather than relying on your consent or signing a contract with you); (vi) Prevent us from sending direct marketing messages to you; (vii) Withdraw your consent to our processing of your personal information (if such processing is based on your consent); (viii) Oppose decisions solely based on automated processing or analysis; (ix) In addition to the above, you have the right to file a complaint with regulatory authorities.",
			],
		},
		{
			title: "10. Changes and Updates",
			text: [
				'10.1 This privacy policy may be revised periodically, which will be reflected in the "Latest update" mentioned above. Please revisit this page to learn about any changes. Your continued use of the game constitutes your consent to this privacy policy and any future revisions.',
				"10.2 Contact us: newgranulegames@gmail.com",
			],
		},
	]);

	return (
		<section className="main py-20">
			{/* title */}
			<h1 className="text-5xl font-bold my-9">Privacy Policy</h1>
			{privacyPolicyData.map((item, index) => {
				return (
					<div key={index}>
						<h2 className="text-2xl font-bold my-7">{item.title}</h2>
						{item.text.map((t: any, i: React.Key | null | undefined) => {
							return (
								<p className="text-text-200 mt-4" key={i}>
									{t}
								</p>
							);
						})}
					</div>
				);
			})}
		</section>
	);
};

export default View;
