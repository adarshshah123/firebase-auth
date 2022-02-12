
import app from "flarum/forum/app";
import firebaseAuth from "./components/firebaseAuth";
import { extend, override } from "flarum/common/extend";
import LogInButtons from "flarum/forum/components/LogInButtons";
import LogInButton from "flarum/forum/components/LogInButton";
import extractText from "flarum/common/utils/extractText";
import Tooltip from "flarum/common/components/Tooltip";
import SignUpModal from "flarum/forum/components/SignUpModal";
import Button from "flarum/components/Button"; 

app.initializers.add("adarsh/firebase", () => {
  const onlyIcons = !!Number(app.data["fof-firebase.only_icons"]);

  extend(LogInButtons.prototype, "items", function (items) {
    const buttons = app.forum.attribute("fof-firebase").filter(Boolean);
    // console.log(app.forum.attribute('fof-firebase'));
    const googleButton = buttons.splice(
      buttons.indexOf(buttons.find((b) => b.name === "google")),
      1
    );

    buttons.concat(googleButton).forEach(({ name, icon }) => {
      let className = `Button FoFLogInButton LogInButton--${name}`;

      // Google branding does not allow inline icon, so we'll keep the full button
      if (onlyIcons && name !== "google") {
        className += " Button--icon";
      }

      items.add(
        name,
        <div className={`LogInButtonContainer LogInButtonContainer--${name}`}>
          <Button
            className={`Button FoFLogInButton LogInButton LogInButton--${name}`}
            icon={icon}
            onclick={() => firebaseAuth(name)}
          >
            {app.translator.trans(
              `fof-firebase.forum.log_in.with_${name}_button`,
              {
                provider: app.translator.trans(
                  `fof-firebase.forum.providers.${name}`
                ),
              }
            )}
          </Button>
        </div>
      );
    });
  });

  if (onlyIcons) {
    // override(Button.prototype, "view", function (orig, vnode) {
    //   const child = orig(vnode);

    //   return <Tooltip text={extractText(child.children[1])}>{child}</Tooltip>;
    // });
    extend(LogInButtons.prototype, "view", function (vdom) {
      vdom.attrs.className += " FoFLogInButtons--icons";
    });
  }

  extend(SignUpModal.prototype, "fields", function (items) {
    // If a suggested username was not provided by the firebase service, display some help text to the user.
    if (!!this.attrs.token && !!!this.attrs.username) {
      items.add(
        "username-help",
        <div>
          <p>{app.translator.trans("fof-firebase.forum.signup.username_help")}</p>
        </div>,
        35
      );
    }
    return items;
  });
});
