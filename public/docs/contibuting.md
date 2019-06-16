# Contributing Guidelines

Do you want to make the website better? Great! We welcome suggestions and pull requests. However, please follow these steps before attempting to make changes.

## Writing New Code

Before writing new code, make sure that you always maintain this basic structure displayed in this [document](https://github.com/techclubssn/techclubssn.github.io/blob/master-readable/public/docs/structure.md). You can follow the below guidelines as a rule of thumb:

- If you are making minor code changes, then just directly edit the respective files.
- If you are adding an entirely new component and it is **different** from existing components (such as an Achievements section), then create new `.js` and `.css` files. Create a new directory and place these files in them.
- If you are adding an entirely new component but it is **complementary** from existing components (such as pages for Corona or Tesla), then create new `.js` and `.css` files. Create a new directory and place these files in them. After that, place this new directory and the existing complementary code in the same parent directory (Such as Events/Tesla, Events/Corona or Events/Hackerspace).
- **Always** add comments to explain your code internally and update existing documentation about your changes.

## Instructions for Open Source Contributors.

1. Fork this repository.
2. Go through the [documentation](https://github.com/techclubssn/techclubssn.github.io/tree/master-readable/public/docs) carefully and complete the local setup without any errors. While doing the local setup, clone the `dev` branch instead of the `master-readable` branch.
3. Make the relevant modifications to the code in the your fork. It is recommended to create a new local branch before making changes.
4. Launch the webpage on your local system to verify if everything is working properly.
5. Submit a pull request by comparing your local branch to the `dev` branch. Mention atleast one of the active contributors in your pull request.
6. An active contributor will review your code and will merge it if everything looks good. Otherwise, they will leave suggestions.

## Instruction for Active Contributors.

1. Follow the above instructions upto step 4. However if only a few people are actively contributing, you can just create a new branch with your changes without creating a fork.
2. Either create a pull request or push your new branch to the repo. It is recommended to get the code reviewed by another active contributor.
3. Merge/Rebase your new branch to the `dev` branch after the changes have been reviewed. Push the changes to the remote repository.
4. If the changes of `dev` branch are ready for deployment, merge it into the `master-readable` branch. Push the changes to the remote repository.
5. Switch to the `master-readable` branch and create the production build by running `npm run build`.
6. Switch to the `master` branch and remove all files except `README.md`, `.gitignore`, `LICENSE.md` and the `build` folder. Move the contents from the `build` folder to replace the files and folders you just deleted.
7. Push the changes to the remote repository.
