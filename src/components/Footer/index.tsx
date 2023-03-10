import { EnvelopeSimpleOpen, GithubLogo, LinkedinLogo } from "phosphor-react";
import { FooterContainer, FooterContent } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>

                <div>
                    <h3>Desenvolvedor Front-end </h3>

                    <h4>Alexandre Santos</h4>
                </div>
                <div>
                    <h3>Contato </h3>
                    <div className="contato">
                        <a href="https://www.linkedin.com/in/alexandremfs/" target='_blank'>
                            <LinkedinLogo size={40} color="#fafafa" alt="Linkedin"/>
                            alexandremfs
                        </a>
                        <a href="https://github.com/AleMFS" target='_blank'>
                            <GithubLogo size={40} color="#fafafa" alt="Github"/>
                            AleMFS
                        </a>
                        <p>
                            <EnvelopeSimpleOpen size={40} color="#fafafa"  alt="E-mail"/>
                            Alexandre_MFS@outlook.com
                        </p>
                    </div>
                </div>


            </FooterContent>
        </FooterContainer>
    )
}