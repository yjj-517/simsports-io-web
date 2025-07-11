// terms-of-use
import React, { useState } from "react";

const View: React.FC = () => {
	const [termsOfUseData] = useState<any[]>([
		{
			title: "1. Acceptance of Terms",
			text: [
				'METAPROPHET PTE. LTD. ("MP") provides the gaming platform SimSports, including the website https://simsports.io (the "Site") and the game "All-Star 3PT Apex" (the "Game"). Please read these Terms of Use carefully before using the Game and Website. By using or otherwise accessing the Game and Site, you need: (1) Accept and agree to be bound by these Terms; (2) Accept that the Game is still in beta and is used at your own risk, as described in Section 2 below; (3) Represent that you are of age to use the Game and Site in accordance with Sections 3 and 8 below;  (4) Accept and agree to any other terms, rules and conditions of participation published by MP from time to time. If you do not agree to these Terms, you may not access or use the Game or Site. MP has no obligation to continue to operate the game and website and may decide in its sole discretion whether to continue operating the game and does not assume any responsibility for this.',
			],
		},
		{
			title: "2. Testing Modifications to Disclaimer and Terms of Use",
			text: [
				'The game is still in beta, is provided "as is" and "as available" and may contain bugs and software errors. You are advised to protect important data, property and content, use caution, and not rely on the correct or secure functionality or performance of the Game. Except for Section 17, which provides for a binding arbitration and waiver of class action rights, MP reserves the right to modify or replace the Terms of Use at any time in its sole discretion. The most current version of these Terms will be posted on our website. You are responsible for reviewing and familiarizing yourself with any such modifications. Your use of the Game following any modifications to the Terms will constitute your acceptance of the Terms of Use.',
			],
		},
		{
			title: "3. Qualifications",
			text: [
				"You hereby represent and warrant that you are fully able and competent to accept the terms, conditions, obligations, affirmations, representations and warranties contained in these Terms and to abide by and comply with these Terms. MP operates a global platform and by accessing the Site or Games, you represent and warrant that you are 13 years of age or older, and meet the foregoing eligibility requirements. Further, if you use the Game you may not transfer or provide to us any currency, digital assets, or other items that have been derived from any illegal or unlawful activity.",
			],
		},
		{
			title: "4. Account Access and Security",
			text: [
				"To access the Game, you need to create an account ('SimSports Account') and set up a username and password. The opening of a SimSports account and account access and security are subject to MP's Terms of Use, which can be found on the SimSports website (https://download.simsports.io/web/Terms_and_Conditions.pdf). You acknowledge and agree that in order to operate the game and website, personal information from your SimSports account may be shared with other subsequent web pages, features or games of MP.",
				"MP is not responsible for any security breach or unauthorized access to your SimSports account. You are solely responsible for any activity on your account and for maintaining the confidentiality and security of your password. MP is not liable for any acts or omissions by you in connection with your account. It is recommended that you: (a) Avoid using the same password that you have used anywhere outside of the third-party private key manager; (b) Protect your password and any related confidential information and not share it with others.",
				"You must promptly notify MP in accordance with MP's Terms of Use to prevent unauthorized use or access to your SimSports account, password or other security breach, please notify at allstar3pointapex@gmail.com.",
				"You are responsible for all activity that occurs through your account, whether or not you authorized that activity. If fraudulent, illegal, or other violations of this Agreement are discovered or reported in connection with your Account (whether reported by you or others), MP may terminate your SimSports Account as described in Section 14.",
				"You are responsible for protecting your password and restricting access to your device. You are responsible for any harm resulting from your disclosure or authorization to disclose your password, or to anyone using your password to access your account.",
				"You must notify MP immediately of any unauthorized use of or access to your account, password or other security breach at allstar3pointapex@gmail.com.",
				"Please note that if you lose your password for a third-party private key manager, you accept that MP will not be able to resolve any resulting issues.",
				"MP is not responsible for your failure for any reason to comply with any of the above obligations, or for any loss or damage (of any kind and under any legal theory) incurred by you or any third party for any reason.",
				"MP is not responsible for any loss or damage arising from your sharing or loss of passwords, private keys or related information, or unauthorized access to your SimSports account.",
			],
		},
		{
			title: "5. Disclaimers and Risks",
			text: [
				"5.1 Disclaimer",
				"You acknowledge and agree that the risk of using the game and website is your own responsibility. You acknowledge and agree that MP has no control over and no obligation to take any action regarding: which users are able to access or use the Game; what impact the Game may have on you; how you interpret or use the Game; or how you may be affected by your exposure to the Game. any action taken or failed to be taken. You release MP from all liability that may arise as a result of your inability to access the website, games, or any content therein.",
				"5.2 Application Security",
				"You acknowledge and agree that the Website, Games and related applications are software code that may contain defects, and you acknowledge that you are responsible for evaluating any smart contracts, code provided by the Website, Games or Content and any third parties you access or use through the Games Trustworthiness of the website, product, smart contract or content. This warning, and other warnings later provided by MP, do not in any way justify or indicate a continuing obligation to alert you to all potential risks of using the Game or the Website.",
				"5.3 Rewards Program",
				"MP may establish reward programs from time to time. MP may change or cancel the rewards program at its sole discretion.",
				"5.4 In-game currency",
				"In-game currency may only be used for game-related purposes, has no real currency value, cannot be used as a substitute for real currency, and does not accrue interest.",
				"MP has no obligation to convert or redeem in-game currency for actual currency at any time (unless required by law).",
				"MP reserves the right to modify or terminate your ability to use in-game currency at its sole discretion without notice to you or liability to you.",
				"You may not use or distribute in-game currency except as expressly permitted by these Terms. Any use or attempted use of In-Game Currency in violation of these Terms will be void and may result in immediate termination of your Account and your right to use In-Game Currency.",
				'Except for the limited license granted, MP owns and retains all rights to in-game currencies, including modifying, revoking or terminating your right to use them without notice, payment or liability to you. In-game currency is provided on an "Original Shape" and "Usable" basis, and MP makes no guarantees about in-game currency, its availability, quality or value. Non-tradable in-game currency. MP grants you a limited, non-refundable and non-transferable license solely to access certain game content. Non-tradable in-game currency can only be purchased from MPs and cannot be traded with other users. All payments for non-tradable in-game currency are final and non-refundable, except as required by law.',
				"MP grants you a limited, non-refundable and transferable license solely to access certain game content. Tradeable in-game currency can only be earned through gameplay or traded from other players.",
			],
		},
		{
			title: "6. Transactions and Fees",
			text: [
				"You accept that any applicable taxes associated with use of your Account and in-game purchases will be your responsibility.",
			],
		},
		{
			title: "7. Modification",
			text: [
				'MP may change the terms from time to time in its sole discretion, based upon the reasons including without limitation, (1) to reflect changes to MP’s services or our business, (2) for legal or regulatory reasons, (3) to prevent abuse on or of MP’s services, or (4) to better protect or serve users of MP’s services. When MP makes changes, updated Terms will be made available through the Website and the "Last Updated" date at the beginning of these Terms will be updated accordingly. Please check these Terms periodically for changes. Any changes to the Terms will be effective on the date the changes are made, and your continued access or use of the Game or Site after the Terms have been updated will constitute your binding acceptance of the updates. If you do not agree to any revised terms, you may not access or use the Game or Site.',
			],
		},
		{
			title: "8. Children",
			text: [
				"You confirm that you are over 13 years old, as the game is not intended for children under 13 years of age. If you are over 13 but under 18, or you reside in a jurisdiction where the age of majority is older, you shall agree to review these Terms with your parent or guardian to ensure that both you and your parent or guardian are Understand and agree to these terms. You agree to have your parent or guardian review and accept these Terms on your behalf. If you are a parent or guardian agreeing to the Terms for the benefit of a child over the age of 13, then you agree and accept all responsibility for that child's use of the Game or Site, including all financial charges and legal liability that he or she may incur.",
			],
		},
		{
			title: "9. Compensation",
			text: [
				"You shall release and indemnify MP and its parents, subsidiaries, affiliates and agents, and the officers, directors, employees, shareholders and representatives of any of the foregoing entities, from and against any and all claims arising out of your use of the Game or Site, any violation of these Terms, and any and all claims or actions for loss, liability, expense, damage, costs (including attorneys' fees and court costs) arising out of or resulting from any acts or omissions by you. MP reserves the right, at its own expense, to defend and control any matter otherwise subject to indemnification by you, in which case you agree to cooperate with MP in the defense of such matter.",
			],
		},
		{
			title: "10. Disclaimer",
			text: [
				"This Section does not apply to EU or UK based users.",
				'10.1 You acknowledge and agree that you are solely responsible for your use of the Site and Games. You acknowledge and agree that any information sent or received during your use of the Site and Games may not be secure and may be intercepted or later obtained by unauthorized parties. You acknowledge and agree that your use of the Site and Games is at your own risk. You acknowledge and agree that the Games  are provided on an "Original Shape" and "Useable" basis without warranty of any kind, either express or implied. In recognition of this, you acknowledge and agree that to the maximum extent permitted by applicable law, MP, its affiliates, directors, officers and employees, and its suppliers or licensors shall not be liable to you for any direct, indirect, incidental, special, consequential , punitive, exemplary or other damages of any kind, including but not limited to loss of profits, loss of goodwill, loss of use, loss of data or other tangible or intangible losses or based on contract, tort, strict liability, infringement of intellectual property or Any other damages resulting from theft of property or any other theory (even if MP has been advised of the possibility of such damages) resulting from the Site, Games; use of or inability to use the Sites, Games; Or to your transmissions or data Unauthorized access to or alteration of; statements or conduct of any third party on the Site or Game; any action taken or failed to be taken by MP as a result of communications sent by you; human error; technical failures; failures, including utility or phone calls Interruptions; omissions, interruptions, delays, deletions or defects in any equipment or network, provider or game (including without limitation those not permitted to participate in the game); any harm to computer equipment or Damage; inability to fully access the Website or the Game or any other website; theft, tampering, destruction or unauthorized access to images or any other type of content; late, erroneous or incorrectly processed data or incomplete or missing data; Typographical or other errors, or any combination; or any other matter related to the Site or the Game. Some jurisdictions do not allow the exclusion of certain warranties or limitations or the exclusion of liability for incidental or consequential damages. Therefore, some of the above limitations may not apply to you.',
				"10.2 MP hereby expressly disclaims, waives, releases and waives all warranties, express or implied, including but not limited to any warranties of merchantability, fitness for a particular purpose, title or non-infringement with respect to the Site, Game.",
				"10.3 Without limiting the generality of the above, MP, its subsidiaries, directors, officers, and employees, as well as the licensor, do not represent or guarantee to you that: (I) Your access or use of the game will meet your requirements, (II) Your access or use of the game will be uninterrupted, timely, safe, or error free, (III) The usage data provided through the game will be accurate, (IV) The game, or any content provided through the game The service or function does not contain viruses or other harmful ingredients, or (V) Any data disclosed by you while using the game will be safe.",
				"10.4 You accept the inherent security risks of providing information and transactions online, and agree that MP and its subsidiaries, directors, officials, and employees shall not be held responsible or liable for any security violations, unless attributed to our serious negligence.",
			],
		},
		{
			title: "11. Limitation of Liability",
			text: [
				"11.1. You understand and agree that for any direct, indirect, incidental, special, consequential or punitive damages that you or any third party may suffer, including but not limited to loss of profit (whether directly or indirectly), loss of goodwill or commercial reputation, data loss, procurement costs of substitute goods or services, or any other intangible losses, even if MP has been informed that such damages may occur, MP and its affiliates Officials, employees, directors, and licensors are not responsible for you, regardless of the reason or under any liability theory.",
				"11.2. You agree that for all claims arising from this clause or your access or use (or inability to access or use) of games, whether based on contract, tort, strict liability, or any other legal theory, our overall and comprehensive liability to you is limited to: (A) The amount actually paid to us by you within the first 12 months of the date of the claim; Or (B) $100, whichever is higher.",
				"11.3. Force Majeure. MP will not be liable or responsible to you, nor be deemed to have defaulted under or breached these Terms, for any failure or delay in fulfilling or performing any of our obligations under these Terms or in operating the Services, when and to the extent such failure or delay is caused by or results from any events beyond MP’s ability to control, including flood, fire, earthquake, epidemics, pandemics, quarantine restrictions, tsunami, explosion, war, invasion, hostilities (whether war is declared or not), terrorist threats or acts, riot or other civil unrest, government order, law, or action, embargoes or blockades, strikes, labor stoppages or slowdowns or other industrial disturbances, shortage of adequate or suitable Internet connectivity, telecommunication breakdown, shortage of adequate power or electricity, and other similar events beyond our control.",
				"11.4. You confirm and agree that MP relies on the warranty disclaimers and liability limitations described in this article to provide games and sign this clause, which reflects a reasonable and fair risk allocation between the two parties and constitutes the fundamental basis of our agreement. Without these restrictions, MP will not be able to provide you with games.",
				"11.5. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, and some jurisdictions also limit the disclaimer or limitation of liability for personal injury caused by consumer goods. Therefore, the above limitations may not apply to personal injury claims.",
			],
		},
		{
			title: "12. Exclusive Rights",
			text: [
				'12.1. All titles, ownership, and intellectual property rights in the website and games are exclusively owned by MP or its licensors. You acknowledge and agree that websites and games contain proprietary and confidential information protected by applicable intellectual property rights and other laws. You agree not to copy, modify, rent, lease, loan, sell, distribute, execute, display, or create derivative works based on the website and game, whether in whole or in part. The exclusive ownership of MP should include all elements of the website and game, as well as all intellectual property rights therein. The visual interface, graphics (including but not limited to all art and drawings related to the game), design, systems, methods, information, computer code, software, "appearance," as well as the organization and compilation of website and game content, code, data (collectively referred to as "MP Materials") are owned by MP and are subject to copyright, trademark, patent and trademark laws, international conventions, and other related intellectual property and exclusive rights, And the protection of applicable laws. All MP materials are the copyright property of MP or its licensors, and the trademarks, service marks, and trade names contained in all MP materials are the exclusive property of MP or its licensors. Unless explicitly stated in this article, your use of the website and game does not grant you any ownership or other rights to any content, code, data, or other materials that you may access through the website and game. MP reserves all rights not explicitly granted to you in the MP materials. For the sake of clarity, you understand and agree that without our prior written consent, you have no right to copy, distribute, or otherwise commercialize any element of MP materials in any way (including but not limited to our copyright in game related art and drawings, as well as the content thereof), and we may decide whether to agree or not at our discretion.',
				'12.2. You may choose to submit comments, error reports, ideas, or other feedback regarding the website or game, including but not limited to suggestions on how to improve the game (collectively referred to as "feedback"). By submitting any feedback, you agree that MP may decide at its own discretion and without additional payment to you, as well as disclose such feedback to third parties (whether non confidential or otherwise). You hereby grant us a permanent, irrevocable, non-exclusive, global license to include and use your feedback for any purpose.',
				"12.3. You confirm and agree that you are responsible for your actions and any consequences arising from accessing or using websites and games. You agree to use the website and games solely for legitimate and appropriate purposes, and in accordance with these terms and any applicable laws or regulations. For example, without limitation, you shall not and shall not allow any third party to: (i) Send, publish, upload, transmit, distribute, disseminate, or otherwise provide any content that infringes on the intellectual property rights of either party, or contains any hatred related or violent content, or any other material or product that violates or encourages a violation of any criminal law, any other applicable law, or any third party rights; (ii) Distribute viruses, worms, defects, Trojan horses, spyware, time bombs, cancellation robots, damaged files, pranks, or any other destructive or deceptive items, or collect or collect any data or information from other users without their consent; (iii) Impersonating another person (by using an email address or otherwise); (iv) Using a website or game to infringe on the legal rights of others (such as privacy and disclosure rights); (v) Participate in, promote or encourage illegal activities (including but not limited to money laundering); (vi) Interference with other users' enjoyment of the website or game; (vii) Using websites or games for any unauthorized commercial purposes; (viii) Publish or transmit unauthorized advertising or promotional materials, which are classified as 'spam', 'chain letters', 'pyramid schemes' or any other similar form of solicitation; (ix) Modify, adapt, translate or reverse engineer any part of the game; (x) Remove any copyright, trademark, or other proprietary rights notices contained on the website or game or any part thereof; (xi) Reformatting or structuring any part of the website or game; (xii) Track, harass, or engage in any sexual, suggestive, obscene, lewd, or other inappropriate behavior towards minors on websites or games; (xiii) Use any robot, spider, website search/retrieval application or other device to retrieve or index any part of the content posted on a website, game or game, or collect information about its users for unauthorized purposes; (xiv) Use any cheating, hacking, or any other unauthorized technology or unauthorized third-party software to cheat in any game or game provided by other users, or otherwise interfere with or modify the game or the experience of any user in the game; (xv) Creating user accounts through automated means or false or fraudulent disguise; (xvi) Attempting unauthorized access to any other user's SimSports account, password, or content; (xvii) Access or use games to create products or services that compete with our games.",
			],
		},
		{
			title: "13. Links",
			text: [
				"Links to other World Wide Web or accessible websites, applications, or resources provided by websites and games, or possibly provided by third parties. Due to MP's inability to control such websites, applications, and resources, you acknowledge and agree that MP is not responsible for the availability of such external websites, applications, or resources, nor does it acknowledge and assume responsibility for any content, advertisements, products, or other materials available on or from such websites or resources. You further acknowledge and agree that MP shall not be directly or indirectly responsible for any damage or loss caused or claimed to be caused by the use or reliance on any such content, goods or services on or through such websites or resources.",
			],
		},
		{
			title: "14. Termination and Suspension",
			text: [
				"You have the right to use SimSports at any time in accordance with its terms of use(https://download.simsports.io/web/Terms_and_Conditions.pdf) cancel and stop accessing and using the game, thereby terminating your SimSports account. MP can immediately terminate or suspend all or part of the website and games, as well as your access to the website and games, without prior notice or liability. If you cancel your SimSports account or terminate these terms in any other way, you will not receive any refund. You agree that MP may terminate these terms at its discretion and for any or no reason, and suspend and/or terminate your game SimSports account. You agree that any suspension or termination of your access to the website or game may not require prior notice, and MP will not be liable to you or any third party for any such suspension or termination. If MP suspends or terminates your SimSports account due to your violation of these terms or any suspected fraud, abuse, or illegal activity, the termination of these terms will be an additional remedy in addition to any other remedies that MP may have under law or in equity. Upon the termination or expiration of your SimSports account, whether by you or us, you may no longer have access to information posted on the game or related to your SimSports account, and you acknowledge that MP is not obligated to maintain any such information in our database or forward any such information to you or any third party. When your SimSports account terminates, your right to use the game will immediately terminate. The following provisions of these clauses shall remain in effect after their termination: Disclaimers and risks; Transactions and fees; Compensation; Disclaimers Limitation of Liability; Exclusive rights; Link; Termination and suspension; No third-party beneficiaries; Binding immunity from arbitration and class action litigation; General information.",
			],
		},
		{
			title: "15. No third-party beneficiaries",
			text: [
				"You agree that unless otherwise explicitly stated in these terms, these terms should not have third-party beneficiaries.",
			],
		},
		{
			title: "16. Waiver of Binding Arbitration and Class Litigation",
			text: [
				"Please read this section carefully - it may significantly affect your legal rights, including your right to file a lawsuit in court. If you are a user based in the European Union or the United Kingdom, the provisions of this section do not apply to you, and you can file a lawsuit in your country of residence.",
				"16.1. Preliminary Dispute Resolution",
				"Each party shall make every effort to directly participate in the resolution of any dispute, claim, issue or objection, and engage in good faith negotiations, which will be a condition for either party to initiate litigation or arbitration.",
				"16.2. Binding Arbitration",
				"If the parties fail to reach an agreement within 30 days of commencing informal dispute resolution in accordance with the preliminary dispute resolution clause, either party may initiate binding arbitration as the sole means of resolving the claim. The specific terms are as follows.",
				'Specifically, any dispute not resolved under the preliminary dispute resolution clause shall be finally resolved by one arbitrator in accordance with the International Chamber of Commerce ("ICC") arbitration rules. Within ten (10) calendar days of the delivery date of the arbitration notice, each party shall appoint a mutually acceptable arbitrator. If the parties fail to choose a mutually acceptable arbitrator within ten (10) calendar days of the delivery of the arbitration notice, the arbitrator shall be appointed by the President of the International Chamber of Commerce. The parties agree that arbitration shall be conducted in the Cayman Islands or other mutually acceptable location. Any decision or award made by the arbitrator shall be final and may enter judgment in accordance with the applicable law of any court of competent jurisdiction. In order to share costs, all claimants should be considered as one party, and all respondent should be considered as one party. Each party shall keep confidential all aspects of any arbitration initiated in accordance with these terms, and shall not disclose the facts, actions, or results of the arbitration to any non party or non participant, unless required by applicable law or necessary to confirm or enforce the final award or decision in the arbitration, without the prior written consent of all arbitration parties.',
				"16.3. Waiver of Class Litigation",
				"The parties further agree that any arbitration shall be conducted solely in their individual capacity and not as a class action or other representative action, and each party expressly waives the right to file a class action or seek relief on a collective basis. You and MP agree that each person can only file a claim against the other party in your or their personal capacity, and not as a plaintiff or class member in the claimed collective or representative litigation. If any court or arbitrator determines that the waiver of a class action referred to in this paragraph is invalid or unenforceable, or if arbitration can be conducted on a collective basis, the aforementioned arbitration clause shall be deemed completely invalid, and the parties shall be deemed to have not agreed to the arbitration dispute.",
				"16.4. Exceptions - Intellectual Property Litigation and Small Claims Court Litigation",
				"Although the parties have decided to resolve all disputes through arbitration, either party may file a lawsuit in a state or federal court to protect their intellectual property rights. Each party may also seek relief for disputes or claims in a small claims court, provided that the court has jurisdiction.",
				"16.5. The right to opt out within 30 days",
				"You have the right to opt out and are not bound by the arbitration and class action waiver clauses mentioned above, by sending written notice of your choice to the following email address: allstar3pointapex@gmail.com . Your notice must be sent within 30 days of the first use of the game, otherwise you should arbitrate the dispute according to the terms of these paragraphs. If you choose to withdraw from these arbitration clauses, MP will also not be bound by them.",
				"16.6. Changes to this section",
				"MP will notify any changes to this section 60 days in advance. The changes will take effect on the 60th day and only apply to any claims arising after the 60th day.",
				"These terms and the relationship between you and MP shall be governed by the laws of the Cayman Islands, without regard to conflict of laws provisions.",
				"For any dispute that is not subject to arbitration, you and MP agree to submit it to the exclusive jurisdiction of the court located in the Grand Court of the Cayman Islands. You further agree to accept delivery through email and hereby waive all other available jurisdiction and venue defense rights.",
			],
		},
		{
			title: "17. General Information",
			text: [
				"17.1. Entire Agreement. These terms (and any additional terms, rules, and participation conditions that MP may publish on the website or game) constitute the entire agreement between you and MP regarding the game and supersede any prior agreements between you and MP, whether oral or written. If there is a conflict between these terms and additional terms, rules, and participation conditions, the latter will take precedence over these terms within the scope of the conflict.",
				"17.2. Waiver and Severability of Terms. The failure of MP to exercise or enforce any rights or provisions of these terms shall not constitute a waiver of such rights or provisions. If the arbitrator or a court of competent jurisdiction finds any provision of the clause invalid, the parties still agree that the arbitrator or court shall strive to achieve the intention reflected by the parties in the provision, while the other provisions of the clause shall remain fully effective.",
				"17.3. Limitation of Action. You agree that regardless of any laws or regulations, any claim or cause of action related to the use of the website, game, or terms must be filed within one (1) year after the claim or cause of action arises, otherwise it will be permanently prohibited.",
				"17.4. Section Title. The section titles in the clauses are for convenience only and have no legal or contractual effect.",
				"17.5. Communication. Users who have issues, complaints, or claims about the website or game can email us via allstar3pointapex@gmail.com. Or contact us with the relevant contact information listed in.",
			],
		},
	]);

	return (
		<section className="main py-10">
			{/* title */}
			<h1 className="text-3xl md:text-5xl font-bold">Acceptance of Terms</h1>
			{termsOfUseData.map((item, index) => {
				return (
					<div key={index}>
						<h2 className="text-xl md:text-2xl font-bold my-[26px]">{item.title}</h2>
						{item.text.map((t: any, i: React.Key | null | undefined) => {
							return (
								<p className="text-text-200 mt-[16px]" key={i}>
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
