import app from "flarum/admin/app";
import Button from 'flarum/common/components/Button';
import ExtensionPage from "flarum/admin/components/ExtensionPage";
import icon from "flarum/common/helpers/icon";

export default class AuthSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
  }

  content() {
    return [
      <div className="container">
        <div className="AuthSettingsPage">
          <div className="Form">
            {this.buildSettingComponent({
              type: "boolean",
              setting: "fof-firebase.only_icons",
              label: app.translator.trans(
                `fof-firebase.admin.settings.only_icons_label`
              ),
            })}

            <hr />

            {app.data["fof-firebase"].map((provider) => {
              const { name } = provider;

              return (
                <div className={`Provider`}>
                  <div className="Provider--info">
                    {this.buildSettingComponent({
                      type: "boolean",
                      setting: `fof-firebase.${name}`,
                      label: (
                        <div>
                          {icon(provider.icon)}
                          <span>
                            {app.translator.trans(
                              `fof-firebase.lib.providers.${name}`
                            )}
                          </span>
                        </div>
                      ),
                    })}
                    {
                      <Button
                        className={`Button Button--rounded Button--help`}
                        onclick={() => help_div()}
                      >
                        {icon(`fas fa-question`)}
                      </Button>
                    }
                  </div>
                  <div className="Provider--help" >
                    <div className="Provider--text">
                      <p>
                        {app.translator.trans(
                          `fof-firebase.admin.settings.providers.${name}.description`,
                          {
                            link: (
                              <a href={provider.link} target="_blank">
                                {provider.link}
                              </a>
                            ),
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {this.submitButton()}
          </div>
        </div>
      </div>,
    ];
  }
}
