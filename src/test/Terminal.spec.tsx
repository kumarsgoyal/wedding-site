import { describe, it, expect, vi } from "vitest";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { render, screen, userEvent } from "../utils/test-utils";
import Terminal, { commands } from "../components/Terminal";

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const allCmds = commands.map(cmdObj => cmdObj.cmd);

describe("Terminal Component", () => {
  let terminalInput: HTMLInputElement;
  let user: UserEvent;

  beforeEach(() => {
    const termSetup = setup(<Terminal />);
    user = termSetup.user;
    terminalInput = screen.getByTitle("terminal-input") as HTMLInputElement;
  });

  describe("Input Features & Initial State", () => {
    it("should display welcome cmd by default", () => {
      expect(screen.getByTestId("input-command").textContent).toBe("welcome");
    });

    it("should change input value", async () => {
      await user.type(terminalInput, "demo");
      expect(terminalInput.value).toBe("demo");
    });

    it("should clear input value on enter", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(terminalInput.value).toBe("");
    });
  });

  describe("Input Commands", () => {
    it("should return 'command not found' for invalid command", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(screen.getByTestId("not-found-0").textContent).toContain("demo: command not found");
    });

    it("should return '~$guest' for 'whoami' command", async () => {
      await user.type(terminalInput, "whoami{enter}");
      expect(screen.getByTestId("latest-output").textContent).toContain("~$guest");
    });

    it("should show history including past commands", async () => {
      await user.type(terminalInput, "whoami{enter}");
      await user.type(terminalInput, "history{enter}");
      const commands = screen.getByTestId("latest-output").querySelectorAll("div");
      expect(commands.length).toBeGreaterThanOrEqual(3);
    });

    it("should clear terminal on 'clear' command", async () => {
      await user.type(terminalInput, "clear{enter}");
      expect(screen.getByTestId("terminal-wrapper").children.length).toBe(1);
    });

    it("should render Welcome component on 'welcome' command", async () => {
      await user.type(terminalInput, "clear{enter}");
      await user.type(terminalInput, "welcome{enter}");
      expect(screen.getByTestId("welcome")).toBeInTheDocument();
    });

    ["about", "programme", "help", "history", "themes"].forEach(cmd => {
      it(`should render component for '${cmd}' command`, async () => {
        await user.type(terminalInput, `${cmd}{enter}`);
        expect(screen.getByTestId(cmd)).toBeInTheDocument();
      });
    });
  });

  describe("Keyboard Shortcuts", () => {
    it("should autocomplete with Tab", async () => {
      await user.type(terminalInput, "th");
      await user.tab();
      expect(terminalInput.value).toBe("themes");
    });

    it("should autocomplete with Ctrl+i", async () => {
      await user.type(terminalInput, "he");
      await user.keyboard("{Control>}i{/Control}");
      expect(terminalInput.value).toBe("help");
    });

    it("should clear terminal with Ctrl+l", async () => {
      await user.type(terminalInput, "history{enter}");
      await user.keyboard("{Control>}l{/Control}");
      expect(screen.getByTestId("terminal-wrapper").children.length).toBe(1);
    });

    it("should navigate command history with Up/Down arrows", async () => {
      await user.type(terminalInput, "about{enter}");
      await user.type(terminalInput, "whoami{enter}");
      await user.type(terminalInput, "themes{enter}");
      await user.keyboard("{arrowup}");
      expect(terminalInput.value).toBe("themes");
      await user.keyboard("{arrowup}");
      expect(terminalInput.value).toBe("whoami");
      await user.keyboard("{arrowdown}");
      expect(terminalInput.value).toBe("themes");
    });
  });
});
